package fr.univlittoral.whattsup.model.entities.clickhouse;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
public class ChargingStationPreciseQuantityEntity extends ChargingStationQuantityEntity {
    private int month;

    public ChargingStationPreciseQuantityEntity(int count, int year, int month) {
        super(count, year);
        this.month = month;
    }
}
