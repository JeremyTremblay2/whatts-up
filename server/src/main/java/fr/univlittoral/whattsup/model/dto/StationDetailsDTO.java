package fr.univlittoral.whattsup.model.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class StationDetailsDTO {
    private String itinerantStationId;
    private String localStationId;
    private String implantation;
    private Integer numberOfChargingPoints;
    private Boolean reservationRequired;
    private String accessConditions;
    private String operatingHours;
    private String deliveryPointNumber;
    private String templateRestrictions;
}