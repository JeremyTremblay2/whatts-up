package fr.univlittoral.whattsup.model.dao.postgres;

import fr.univlittoral.whattsup.model.entities.postgres.ChargingStationEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface PostgresChargingStationRepository extends JpaRepository<ChargingStationEntity, Long> {
}