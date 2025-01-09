package fr.univlittoral.whattsup.model.dao.clickhouse;

import fr.univlittoral.whattsup.model.entities.postgres.ChargingStationEntity;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.jdbc.core.BeanPropertyRowMapper;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;

import java.util.Collection;

@Repository
public class ClickHouseChargingStationRepository {
    private final JdbcTemplate jdbcTemplate;

    @Autowired
    public ClickHouseChargingStationRepository(@Qualifier("clickhouseJdbcTemplate") JdbcTemplate jdbcTemplate) {
        this.jdbcTemplate = jdbcTemplate;
    }

    public Collection<ChargingStationEntity> getAllChargingStations() {
        String query = "SELECT * FROM ev_charging_stations";
        return jdbcTemplate.query(query, new BeanPropertyRowMapper<>(ChargingStationEntity.class));
    }
}

