package no.ntnu.let.letapi.dto.listing;

import lombok.Getter;
import lombok.Setter;
import no.ntnu.let.letapi.dto.user.UserMinimalDTO;
import no.ntnu.let.letapi.model.listing.ListingState;

@Getter
@Setter
public class ListingFullDTO {
    private Long id;
    private String title;
    private String summary;
    private Long price;
    private ImageDTO thumbnail;
    private String locationName;
    private String categoryName;
    private String description;
    private ListingState state;
    private String created;
    private ImageDTO[] gallery;
    private UserMinimalDTO seller;
}
