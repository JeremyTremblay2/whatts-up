package fr.univlittoral.whattsup.model.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.List;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class ChargingStationQuantitiesDTO {
    List<ChargingStationQuantityDTO> quantities;
    private String department;
}
