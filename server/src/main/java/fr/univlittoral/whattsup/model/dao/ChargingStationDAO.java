package fr.univlittoral.whattsup.model.dao;

import fr.univlittoral.whattsup.model.entities.postgres.ChargingStationEntity;

import java.util.Collection;

public interface ChargingStationDAO {
    Collection<ChargingStationEntity> getChargingStations(int page, int pageSize);
    ChargingStationEntity getChargingStationById(String id);
    boolean addChargingStation(ChargingStationEntity chargingStation);
    boolean updateChargingStation(ChargingStationEntity chargingStation);
    boolean deleteChargingStation(String id);
}
