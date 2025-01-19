package fr.univlittoral.whattsup.model.bo;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class LocationInfoBO {
    private Double longitude;
    private Double latitude;
    private String postalCode;
    private String city;
}