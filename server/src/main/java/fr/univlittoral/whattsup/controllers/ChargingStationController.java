package fr.univlittoral.whattsup.controllers;

import fr.univlittoral.whattsup.mappers.ChargingStationMapper;
import fr.univlittoral.whattsup.mappers.ChargingStationQuantitiesMapper;
import fr.univlittoral.whattsup.model.bo.ChargingStationBO;
import fr.univlittoral.whattsup.model.bo.ChargingStationQuantityBO;
import fr.univlittoral.whattsup.model.dto.ChargingStationDTO;
import fr.univlittoral.whattsup.model.dto.ChargingStationQuantitiesDTO;
import fr.univlittoral.whattsup.services.ChargingStationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

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

    @PostMapping
    public ResponseEntity<ChargingStationDTO> addChargingStation(@RequestBody ChargingStationDTO dto) {
        ChargingStationBO bo = ChargingStationMapper.dtoToBo(dto);
        ChargingStationBO savedBo = service.addChargingStation(bo);
        ChargingStationDTO savedDto = ChargingStationMapper.boToDto(savedBo);
        return ResponseEntity.ok(savedDto);
    }

    @PutMapping
    public ResponseEntity<ChargingStationDTO> updateChargingStation(@RequestBody ChargingStationDTO dto) {
        ChargingStationBO bo = ChargingStationMapper.dtoToBo(dto);
        ChargingStationBO updatedBo = service.updateChargingStation(bo);
        ChargingStationDTO updatedDto = ChargingStationMapper.boToDto(updatedBo);
        return ResponseEntity.ok(updatedDto);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteChargingStation(@PathVariable Long id) {
        service.deleteChargingStation(id);
        return ResponseEntity.noContent().build();
    }

    @GetMapping("/{id}")
    public ResponseEntity<ChargingStationDTO> getChargingStationById(@PathVariable Long id) {
        Optional<ChargingStationBO> bo = service.getChargingStationById(id);
        return bo.map(b -> ResponseEntity.ok(ChargingStationMapper.boToDto(b)))
                .orElseGet(() -> ResponseEntity.notFound().build());
    }

    @GetMapping
    public ResponseEntity<Page<ChargingStationDTO>> getChargingStationsByPage(
            @RequestParam int page,
            @RequestParam int size,
            @RequestParam(required = false) String sortColumn,
            @RequestParam(required = false) String sortDirection) {
        Page<ChargingStationBO> bos = service.getChargingStationsByPage(page, size, sortColumn, sortDirection);
        Page<ChargingStationDTO> dtos = bos.map(ChargingStationMapper::boToDto);
        return ResponseEntity.ok(dtos);
    }

    @GetMapping("/quantities")
    public ChargingStationQuantitiesDTO getChargingStationsQuantities(
            @RequestParam(value = "department", required = false) String department,
            @RequestParam(value = "includeMonths") Boolean includeMonths) {

        Collection<ChargingStationQuantityBO> bos = service.findChargingStationsQuantities(department, includeMonths);

        return new ChargingStationQuantitiesDTO(bos.stream()
                .map(ChargingStationQuantitiesMapper::boToDto)
                .collect(Collectors.toList()), department);
    }
}