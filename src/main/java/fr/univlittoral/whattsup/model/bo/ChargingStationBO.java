package fr.univlittoral.whattsup.model.bo;

import java.time.LocalDate;
import java.time.LocalDateTime;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class ChargingStationBO {
    private Integer id;
    private String name;
    private String address;
    private String coordinates;
    private String operatorName;
    private String managerName;
    private StationDetailsBO stationDetails;
    private ChargingPointBO chargingPoint;
    private Boolean twoWheelerStation;
    private LocalDateTime commissioningDate;
    private String accessibility;
    private String observations;
    private LocalDate lastUpdate;
    private LocationInfoBO locationInfo;
}