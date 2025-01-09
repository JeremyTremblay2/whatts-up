package fr.univlittoral.whattsup.model.bo;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class StationDetailsBO {
    private String itinerantStationId;
    private String localStationId;
    private String implantation;
    private Integer numberOfChargingPoints;
    private Boolean reservationRequired;
    private String accessConditions;
    private String operatingHours;
}