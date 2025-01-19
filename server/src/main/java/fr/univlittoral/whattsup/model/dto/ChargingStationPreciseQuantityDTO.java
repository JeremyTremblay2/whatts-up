package fr.univlittoral.whattsup.model.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
public class ChargingStationPreciseQuantityDTO extends ChargingStationQuantityDTO {
    private int month;

    public ChargingStationPreciseQuantityDTO(int count, int year, int month) {
        super(count, year);
        this.month = month;
    }
}
