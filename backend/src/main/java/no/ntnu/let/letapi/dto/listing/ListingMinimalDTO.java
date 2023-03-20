package no.ntnu.let.letapi.dto.listing;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class ListingMinimalDTO {
    private Long id;
    private String title;
    private String summary;
    private Long price;
    private String thumbnailUrl;
    private String locationName;
    private String categoryName;
}
