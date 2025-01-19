package fr.univlittoral.whattsup.model.entities.clickhouse;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class ChargingStationQuantityEntity {
    private int count;
    private int year;
}
