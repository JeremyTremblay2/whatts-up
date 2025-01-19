package fr.univlittoral.whattsup.model.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.time.LocalDate;
import java.time.LocalDateTime;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class ChargingStationDTO {
    private Integer id;
    private String name;
    private String brandName;
    private String address;
    private String coordinates;
    private String operatorName;
    private String managerName;
    private StationDetailsDTO stationDetails;
    private ChargingPointDTO chargingPoint;
    private Boolean twoWheelerStation;
    private LocalDateTime commissioningDate;
    private String accessibility;
    private String observations;
    private LocalDate lastUpdate;
    private LocationInfoDTO locationInfo;
}