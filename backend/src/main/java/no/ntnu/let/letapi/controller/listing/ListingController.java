package no.ntnu.let.letapi.controller.listing;

import lombok.RequiredArgsConstructor;
import no.ntnu.let.letapi.dto.listing.*;
import no.ntnu.let.letapi.model.listing.Listing;
import no.ntnu.let.letapi.model.listing.ListingState;
import no.ntnu.let.letapi.model.user.User;
import no.ntnu.let.letapi.security.AuthenticationService;
import no.ntnu.let.letapi.service.CategoryService;
import no.ntnu.let.letapi.service.ListingService;
import no.ntnu.let.letapi.service.UserService;
import no.ntnu.let.letapi.util.ListingFilter;
import no.ntnu.let.letapi.util.ListingFilter.ListingFilterBuilder;
import no.ntnu.let.letapi.util.UrlUtil;
import org.springframework.dao.DataIntegrityViolationException;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Objects;
import java.util.stream.Stream;

@RestController
@RequestMapping("/listing")
@RequiredArgsConstructor
public class ListingController {
    private final ListingService listingService;
    private final ListingMapper mapper;
    private final UserService userService;
    private final CategoryService categoryService;
    private final AuthenticationService authenticationService;
    private final String BASE_URL = UrlUtil.getBaseUrl() + "/listing";

    @GetMapping
    public ResponseEntity<Object> getListings(
            @RequestParam(required = false) String searchString,
            @RequestParam(required = false) Double longitude,
            @RequestParam(required = false) Double latitude,
            @RequestParam(required = false) Integer radius,
            @RequestParam(required = false) List<Integer> categories,
            @RequestParam(required = false) Long userId,
            @RequestParam(required = false) Boolean favorites,
            @RequestParam(required = false) List<ListingState> states,
            @RequestParam(defaultValue = "1", required = false) Integer page,
            @RequestParam(defaultValue = "50", required = false) Integer pageSize
            ) {
        // Validate the page number
        if (page <= 0) return ResponseEntity.badRequest().body("Page number must be greater than 0");

        // Validate the page size
        if (pageSize <= 0) return ResponseEntity.badRequest().body("Page size must be greater than 0");

        // Validate the radius
        if (radius != null && radius < 0) return ResponseEntity.badRequest().body("Radius must be greater than 0");

        LocationDTO location = null;
        if (longitude != null && latitude != null) {
            location = new LocationDTO();
            location.setLongitude(longitude);
            location.setLatitude(latitude);
        }

        if ((location == null) != (radius == null))
            return ResponseEntity.badRequest().body("Either both location and radius must be specified, or neither");

        // If the user wants to see their favorites, set the favoritesOf field
        User favoritesOf = null;
        if (favorites != null && favorites) {
            favoritesOf = authenticationService.getLoggedInUser();
        }

        if (userId != null) {
            Boolean ownerOrAdmin = authenticationService.isAdminOrAllowed(user -> user.getId() == userId);
            if (ownerOrAdmin == null) return ResponseEntity.status(HttpStatus.UNAUTHORIZED).build();
            if (!ownerOrAdmin) return ResponseEntity.status(HttpStatus.FORBIDDEN).build();
        }

        // Build the filter
        ListingFilterBuilder filterBuilder = ListingFilter.builder();
        filterBuilder
                .searchString(searchString)
                .locationRadius(location, radius)
                .categories(categories)
                .userId(userId)
                .favoritesOf(favoritesOf)
                .states(states);
        ListingFilter filter = filterBuilder.build();

        // Get the listings from the database
        PageRequest pageRequest = PageRequest.of(page - 1, pageSize);
        Page<Listing> listings = listingService.getListings(filterBuilder.build(), pageRequest);

        // If no listings matched the criteria, return a 204 No Content
        if (listings.isEmpty()) return ResponseEntity.noContent().build();

        // Build the next and previous page URLs
        String urlParameters = filter.toUrlParameters();
        String requestUrl = BASE_URL + urlParameters;
        requestUrl += requestUrl.contains("?") ? "&" : "?";
        String nextUrl = null;
        String prevUrl = null;
        if (listings.getNumber() < listings.getTotalPages() - 1) {
            nextUrl = requestUrl + "page=" + (page + 1) + "&pageSize=" + pageSize;
        }
        if (listings.getNumber() > 0) {
            prevUrl = requestUrl + "page=" + (page - 1) + "&pageSize=" + pageSize;
        }

        // Convert the listings to DTOs and return them
        List<ListingMinimalDTO> listingsDTO = listings.getContent().stream().map(mapper::toListingMinimalDTO).toList();
        var pagedListings = new PagedListingsDTO(
                listingsDTO,
                listings.getNumber() + 1,
                listings.getTotalPages(),
                nextUrl,
                prevUrl
        );
        return ResponseEntity.ok(pagedListings);
    }

    @PostMapping
    public ResponseEntity<Object> createListing(@RequestBody ListingCreationDTO listingCreationDTO) {
        // Validate the input
        if (Stream.of(
                listingCreationDTO.getCategoryId(),
                listingCreationDTO.getSummary(),
                listingCreationDTO.getDescription(),
                listingCreationDTO.getPrice(),
                listingCreationDTO.getTitle(),
                listingCreationDTO.getGalleryIds(),
                listingCreationDTO.getThumbnailId()
                ).anyMatch(Objects::isNull)
        ) {
            return ResponseEntity.badRequest().body("All fields must be specified");
        }

        Boolean admin = authenticationService.isAdmin();
        if (admin == null) return ResponseEntity.status(HttpStatus.UNAUTHORIZED).build();
        if (!admin) return ResponseEntity.status(HttpStatus.FORBIDDEN).build();

        Listing listing = mapper.toListing(listingCreationDTO);
        Listing savedListing;
        try {
            savedListing = listingService.createListing(listing,
                    SecurityContextHolder.getContext().getAuthentication().getName());
        } catch (DataIntegrityViolationException e) {
            return ResponseEntity.badRequest().body("Invalid ID in gallery, thumbnail, or category");
        }

        return ResponseEntity.status(HttpStatus.CREATED).body(mapper.toListingMinimalDTO(savedListing));
    }

    @PutMapping
    public ResponseEntity<Object> updateListing(@RequestBody ListingUpdateDTO listingDTO) {
        Listing oldListing = listingService.getListing(listingDTO.getId());

        Boolean selfOrAdmin = authenticationService.isAdminOrAllowed(user -> user.getId() == oldListing.getSeller().getId());
        if (selfOrAdmin == null) return ResponseEntity.status(HttpStatus.UNAUTHORIZED).build();
        if (!selfOrAdmin) return ResponseEntity.status(HttpStatus.FORBIDDEN).build();

        Listing listing = mapper.toListing(listingDTO);
        Listing savedListing = listingService.updateListing(listing);
        return ResponseEntity.status(HttpStatus.CREATED).body(mapper.toListingMinimalDTO(savedListing));
    }

    @GetMapping("/{id}")
    public ResponseEntity<Object> getListing(@PathVariable long id) {
        Listing listing = listingService.getListing(id);
        if (listing == null) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Listing not found");
        }

        return ResponseEntity.ok(mapper.toListingFullDTO(listing));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Object> deleteListing(@PathVariable long id) {
        Listing listing = listingService.getListing(id);
        if (listing == null) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Listing not found");
        }

        Boolean ownerOrAdmin = authenticationService.isAdminOrAllowed(user -> user.getId() == listing.getSeller().getId());
        if (ownerOrAdmin == null) return ResponseEntity.status(HttpStatus.UNAUTHORIZED).build();
        if (!ownerOrAdmin) return ResponseEntity.status(HttpStatus.FORBIDDEN).build();

        listingService.deleteListing(listing);
        return ResponseEntity.status(HttpStatus.NO_CONTENT).body("Listing deleted");
    }
}
