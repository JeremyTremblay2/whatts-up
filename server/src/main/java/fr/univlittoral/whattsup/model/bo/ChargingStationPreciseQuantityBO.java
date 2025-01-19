package fr.univlittoral.whattsup.model.bo;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
public class ChargingStationPreciseQuantityBO extends ChargingStationQuantityBO {
    private int month;

    public ChargingStationPreciseQuantityBO(int count, int year, int month) {
        super(count, year);
        this.month = month;
    }
}
