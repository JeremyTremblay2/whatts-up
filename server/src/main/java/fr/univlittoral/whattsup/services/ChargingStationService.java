package fr.univlittoral.whattsup.services;

import fr.univlittoral.whattsup.mappers.ChargingStationMapper;
import fr.univlittoral.whattsup.mappers.ChargingStationQuantitiesMapper;
import fr.univlittoral.whattsup.model.bo.ChargingStationBO;
import fr.univlittoral.whattsup.model.bo.ChargingStationQuantityBO;
import fr.univlittoral.whattsup.model.dao.postgres.PostgresChargingStationRepository;
import fr.univlittoral.whattsup.model.dao.clickhouse.ClickHouseChargingStationRepository;
import fr.univlittoral.whattsup.model.entities.clickhouse.ChargingStationQuantityEntity;
import fr.univlittoral.whattsup.model.entities.postgres.ChargingStationEntity;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

import java.util.Collection;
import java.util.List;
import java.util.Optional;

@Service
public class ChargingStationService {

    private final PostgresChargingStationRepository postgresRepository;
    private final ClickHouseChargingStationRepository clickHouseRepository;

    @Autowired
    public ChargingStationService(PostgresChargingStationRepository postgresRepository, ClickHouseChargingStationRepository clickHouseRepository) {
        this.postgresRepository = postgresRepository;
        this.clickHouseRepository = clickHouseRepository;
    }

    public ChargingStationBO addChargingStation(ChargingStationBO bo) {
        ChargingStationEntity entity = ChargingStationMapper.boToEntity(bo);
        ChargingStationEntity savedEntity = postgresRepository.save(entity);
        return ChargingStationMapper.entityToBo(savedEntity);
    }

    public ChargingStationBO updateChargingStation(ChargingStationBO bo) {
        ChargingStationEntity entity = ChargingStationMapper.boToEntity(bo);
        ChargingStationEntity updatedEntity = postgresRepository.save(entity);
        return ChargingStationMapper.entityToBo(updatedEntity);
    }

    public void deleteChargingStation(Long id) {
        postgresRepository.deleteById(id);
    }

    public Optional<ChargingStationBO> getChargingStationById(Long id) {
        Optional<ChargingStationEntity> entity = postgresRepository.findById(id);
        return entity.map(ChargingStationMapper::entityToBo);
    }

    public Page<ChargingStationBO> getChargingStationsByPage(int page, int size, String sortColumn, String sortDirection) {
        Sort sort = Sort.unsorted();
        if (sortColumn != null && sortDirection != null) {
            sort = Sort.by(Sort.Direction.fromString(sortDirection), sortColumn);
        }
        Pageable pageable = PageRequest.of(page, size, sort);
        return postgresRepository.findAll(pageable).map(ChargingStationMapper::entityToBo);
    }

    public Collection<ChargingStationQuantityBO> findChargingStationsQuantities(String department, Boolean includeMonths) {
        List<ChargingStationQuantityEntity> entities = clickHouseRepository.findChargingStationsQuantities(department, includeMonths);
        return entities.stream().map(ChargingStationQuantitiesMapper::entityToBo).toList();
    }
}