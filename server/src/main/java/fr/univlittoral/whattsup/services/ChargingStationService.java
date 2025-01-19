package fr.univlittoral.whattsup.services;

import fr.univlittoral.protobuf.ChargingStationProto;
import fr.univlittoral.whattsup.mappers.ChargingStationMapper;
import fr.univlittoral.whattsup.mappers.ChargingStationQuantitiesMapper;
import fr.univlittoral.whattsup.model.bo.ChargingStationBO;
import fr.univlittoral.whattsup.model.bo.ChargingStationQuantityBO;
import fr.univlittoral.whattsup.model.dao.postgres.PostgresChargingStationRepository;
import fr.univlittoral.whattsup.model.dao.clickhouse.ClickHouseChargingStationRepository;
import fr.univlittoral.whattsup.model.dto.ChargingStationDTO;
import fr.univlittoral.whattsup.model.dto.ChargingStationQuantityDTO;
import fr.univlittoral.whattsup.model.entities.clickhouse.ChargingStationQuantityEntity;
import fr.univlittoral.whattsup.model.entities.postgres.ChargingStationEntity;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.*;
import org.springframework.stereotype.Service;

import java.util.Collection;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
public class ChargingStationService {

    private final PostgresChargingStationRepository postgresRepository;
    private final ClickHouseChargingStationRepository clickHouseRepository;

    @Autowired
    public ChargingStationService(PostgresChargingStationRepository postgresRepository, ClickHouseChargingStationRepository clickHouseRepository) {
        this.postgresRepository = postgresRepository;
        this.clickHouseRepository = clickHouseRepository;
    }

    public ChargingStationDTO addChargingStation(ChargingStationBO bo) {
        ChargingStationEntity entity = ChargingStationMapper.boToEntity(bo);
        ChargingStationEntity savedEntity = postgresRepository.save(entity);
        return ChargingStationMapper.boToDto(ChargingStationMapper.entityToBo(savedEntity));
    }

    public ChargingStationDTO updateChargingStation(ChargingStationBO bo) {
        ChargingStationEntity entity = ChargingStationMapper.boToEntity(bo);
        ChargingStationEntity updatedEntity = postgresRepository.save(entity);
        return ChargingStationMapper.boToDto(ChargingStationMapper.entityToBo(updatedEntity));
    }

    public void deleteChargingStation(Long id) {
        postgresRepository.deleteById(id);
    }

    public Optional<ChargingStationDTO> getChargingStationById(Long id) {
        Optional<ChargingStationEntity> entity = postgresRepository.findById(id);
        return entity.map(ChargingStationMapper::entityToBo).map(ChargingStationMapper::boToDto);
    }

    public Page<ChargingStationProto> getChargingStationsByPage(int page, int size, String sortColumn, String sortDirection) {
        Sort sort = Sort.unsorted();
        if (sortColumn != null && sortDirection != null) {
            sort = Sort.by(Sort.Direction.fromString(sortDirection), sortColumn);
        }
        Pageable pageable = PageRequest.of(page, size, sort);
        Page<ChargingStationEntity> entities = postgresRepository.findAll(pageable);
        List<ChargingStationBO> bos = entities.stream()
                .map(ChargingStationMapper::entityToBo)
                .toList();
        List<ChargingStationProto> protos = bos.stream()
                .map(ChargingStationMapper::boToProto)
                .collect(Collectors.toList());
        return new PageImpl<>(protos, pageable, entities.getTotalElements());
    }

    public Collection<ChargingStationQuantityDTO> findChargingStationsQuantities(String department, Boolean includeMonths) {
        List<ChargingStationQuantityEntity> entities = clickHouseRepository.findChargingStationsQuantities(department, includeMonths);
        return entities.stream()
                .map(ChargingStationQuantitiesMapper::entityToBo)
                .map(ChargingStationQuantitiesMapper::boToDto)
                .collect(Collectors.toList());
    }
}