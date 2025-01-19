package fr.univlittoral.whattsup.model.dao.clickhouse.mappers;

import fr.univlittoral.whattsup.model.entities.clickhouse.ChargingStationPreciseQuantityEntity;
import fr.univlittoral.whattsup.model.entities.clickhouse.ChargingStationQuantityEntity;
import org.springframework.jdbc.core.RowMapper;

import java.sql.ResultSet;
import java.sql.SQLException;

public class ChargingStationQuantitiesRowMapper implements RowMapper<ChargingStationQuantityEntity> {

    @Override
    public ChargingStationQuantityEntity mapRow(ResultSet rs, int rowNum) throws SQLException {
        ChargingStationQuantityEntity data;
        int months = -1;
        try {
            data = new ChargingStationPreciseQuantityEntity();
            ((ChargingStationPreciseQuantityEntity) data).setMonth(getIntIfExists(rs, "month"));
        } catch (SQLException e) {
            data = new ChargingStationQuantityEntity();
        }

        data.setCount(getIntIfExists(rs, "count"));
        data.setYear(getIntIfExists(rs, "year"));
        return data;
    }

    private int getIntIfExists(ResultSet rs, String columnName) throws SQLException {
        return rs.getObject(columnName) != null ? rs.getInt(columnName) : 0;
    }

    private String getStringIfExists(ResultSet rs, String columnName) throws SQLException {
        return rs.getObject(columnName) != null ? rs.getString(columnName) : null;
    }
}