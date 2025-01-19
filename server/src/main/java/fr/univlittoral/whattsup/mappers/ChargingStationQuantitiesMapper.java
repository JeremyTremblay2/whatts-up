package fr.univlittoral.whattsup.mappers;

import fr.univlittoral.whattsup.model.bo.ChargingStationPreciseQuantityBO;
import fr.univlittoral.whattsup.model.bo.ChargingStationQuantityBO;
import fr.univlittoral.whattsup.model.dto.ChargingStationPreciseQuantityDTO;
import fr.univlittoral.whattsup.model.dto.ChargingStationQuantityDTO;
import fr.univlittoral.whattsup.model.entities.clickhouse.ChargingStationPreciseQuantityEntity;
import fr.univlittoral.whattsup.model.entities.clickhouse.ChargingStationQuantityEntity;

public class ChargingStationQuantitiesMapper {
    public static ChargingStationQuantityBO entityToBo(ChargingStationQuantityEntity entity) {
        if (entity instanceof ChargingStationPreciseQuantityEntity entity1) {
            return new ChargingStationPreciseQuantityBO(entity.getCount(), entity.getYear(), entity1.getMonth());
        }
        return new ChargingStationQuantityBO(entity.getCount(), entity.getYear());
    }

    public static ChargingStationQuantityDTO boToDto(ChargingStationQuantityBO bo) {
        if (bo instanceof ChargingStationPreciseQuantityBO bo1) {
            return new ChargingStationPreciseQuantityDTO(bo1.getCount(), bo1.getYear(), bo1.getMonth());
        }
        return new ChargingStationQuantityDTO(bo.getCount(), bo.getYear());
    }
}
