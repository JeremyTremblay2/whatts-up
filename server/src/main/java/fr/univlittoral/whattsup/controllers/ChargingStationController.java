package fr.univlittoral.whattsup.controllers;

import fr.univlittoral.protobuf.ChargingStationPageProto;
import fr.univlittoral.protobuf.ChargingStationProto;
import fr.univlittoral.protobuf.ChargingStationProtos.*;
import fr.univlittoral.protobuf.UserProtos;
import fr.univlittoral.whattsup.mappers.ChargingStationMapper;
import fr.univlittoral.whattsup.mappers.ChargingStationQuantitiesMapper;
import fr.univlittoral.whattsup.model.bo.ChargingStationBO;
import fr.univlittoral.whattsup.model.bo.ChargingStationQuantityBO;
import fr.univlittoral.whattsup.model.dto.ChargingStationDTO;
import fr.univlittoral.whattsup.model.dto.ChargingStationQuantitiesDTO;
import fr.univlittoral.whattsup.model.dto.ChargingStationQuantityDTO;
import fr.univlittoral.whattsup.services.ChargingStationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.Collection;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@RestController
@RequestMapping("/api/charging-stations")
public class ChargingStationController {

    private final ChargingStationService service;

    @Autowired
    public ChargingStationController(ChargingStationService service) {
        this.service = service;
    }

    @PostMapping(produces = "application/json", consumes = "application/json")
    public ResponseEntity<ChargingStationDTO> addChargingStation(@RequestBody ChargingStationDTO dto) {
        ChargingStationBO bo = ChargingStationMapper.dtoToBo(dto);
        ChargingStationDTO savedDto = service.addChargingStation(bo);
        return ResponseEntity.ok(savedDto);
    }

    @PutMapping(produces = "application/json", consumes = "application/json")
    public ResponseEntity<ChargingStationDTO> updateChargingStation(@RequestBody ChargingStationDTO dto) {
        ChargingStationBO bo = ChargingStationMapper.dtoToBo(dto);
        ChargingStationDTO updatedDto = service.updateChargingStation(bo);
        return ResponseEntity.ok(updatedDto);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteChargingStation(@PathVariable Long id) {
        service.deleteChargingStation(id);
        return ResponseEntity.noContent().build();
    }

    @GetMapping(path = "/{id}", produces = "application/json")
    public ResponseEntity<ChargingStationDTO> getChargingStationById(@PathVariable Long id) {
        Optional<ChargingStationDTO> dto = service.getChargingStationById(id);
        return dto.map(ResponseEntity::ok).orElseGet(() -> ResponseEntity.notFound().build());
    }

    @GetMapping(produces = "application/x-protobuf")
    public ResponseEntity<ChargingStationPageProto> getChargingStationsByPage(
            @RequestParam(defaultValue = "0") int page,
            @RequestParam(defaultValue = "10") int size,
            @RequestParam(required = false) String sortColumn,
            @RequestParam(required = false, defaultValue = "ASC") String sortDirection) {
        Page<ChargingStationProto> protos = service.getChargingStationsByPage(page, size, sortColumn, sortDirection);

        return ResponseEntity.ok(ChargingStationPageProto.newBuilder()
                .addAllChargingStations(protos.getContent())
                .setTotalPages(protos.getTotalPages())
                .setTotalElements((int) protos.getTotalElements())
                .setPageSize(protos.getSize())
                .setPageNumber(protos.getNumber())
                .build());
    }

    @GetMapping(path = "/quantities", produces = "application/json")
    public ResponseEntity<ChargingStationQuantitiesDTO> getChargingStationsQuantities(
            @RequestParam(value = "department", required = false) String department,
            @RequestParam(value = "includeMonths", required = false, defaultValue = "false") Boolean includeMonths) {

        Collection<ChargingStationQuantityDTO> quantities = service.findChargingStationsQuantities(department, includeMonths);
        return ResponseEntity.ok(new ChargingStationQuantitiesDTO(new ArrayList<>(quantities), department));
    }
}