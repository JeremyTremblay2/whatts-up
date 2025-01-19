package fr.univlittoral.whattsup.model.dao.clickhouse;

import fr.univlittoral.whattsup.model.dao.clickhouse.mappers.ChargingStationQuantitiesRowMapper;
import fr.univlittoral.whattsup.model.entities.clickhouse.ChargingStationQuantityEntity;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;

import java.util.ArrayList;
import java.util.List;

@Repository
public class ClickHouseChargingStationRepository {
    private final JdbcTemplate jdbcTemplate;

    @Autowired
    public ClickHouseChargingStationRepository(@Qualifier("clickhouseJdbcTemplate") JdbcTemplate jdbcTemplate) {
        this.jdbcTemplate = jdbcTemplate;
    }

    public List<ChargingStationQuantityEntity> findChargingStationsQuantities(String department, Boolean includeMonths) {
        StringBuilder sql = new StringBuilder();
        List<Object> params = new ArrayList<>();

        sql.append("SELECT count(*) as count ")
            .append(", toYear(date_mise_en_service) as year ");

        if (includeMonths != null && includeMonths) {
            sql.append(", toMonth(date_mise_en_service) as month ");
        }

        if (department != null) {
            sql.append(", multiIf(match(adresse_station, '\\\\b97\\\\d{3}\\\\b'), extract(adresse_station, '\\\\b(97\\\\d)\\\\d{2}\\\\b'), ")
                .append("match(adresse_station, '\\\\b98\\\\d{3}\\\\b'), extract(adresse_station, '\\\\b(98\\\\d)\\\\d{2}\\\\b'), ")
                .append("extract(adresse_station, '\\\\b(\\\\d{2})\\\\d{3}\\\\b')) as departement ");
            params.add(department);
        }

        sql.append("FROM ev_charging_stations ")
            .append("WHERE match(adresse_station, '\\\\b[0-9]{5}\\\\b') ")
            .append("AND (id_station_local in (SELECT id_station_local from ev_charging_stations GROUP BY id_station_local HAVING count(*) > 1) ")
            .append("OR ev_charging_stations.id_station_itinerance NOT IN (SELECT id_station_itinerance from ev_charging_stations GROUP BY id_station_itinerance HAVING count(*) > 1)) ")
            .append("AND date_mise_en_service IS NOT NULL ")
            .append("AND toYear(date_mise_en_service) > 2000 ")
            .append("AND toYear(date_mise_en_service) < 2025 ");

        if (department != null) {
            sql.append("AND departement IS NOT NULL ");
            sql.append("AND departement = ? ");
        }

        if (department != null) {
            if (includeMonths != null && includeMonths) {
                sql.append("GROUP BY year, month, departement ");
            } else {
                sql.append("GROUP BY year, departement ");
            }
        }
        else {
            if (includeMonths != null && includeMonths) {
                sql.append("GROUP BY year, month ");
            } else {
                sql.append("GROUP BY year ");
            }
        }

        return jdbcTemplate.query(sql.toString(), new ChargingStationQuantitiesRowMapper(), params.toArray());
    }
}

