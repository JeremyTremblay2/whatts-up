package fr.univlittoral.whattsup.controllers;

import fr.univlittoral.whattsup.mappers.ChargingStationMapper;
import fr.univlittoral.whattsup.model.bo.ChargingStationBO;
import fr.univlittoral.whattsup.model.dto.ChargingStationDTO;
import fr.univlittoral.whattsup.services.ChargingStationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Collection;
import java.util.Optional;

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

    @GetMapping("/page")
    public ResponseEntity<Page<ChargingStationDTO>> getChargingStationsByPage(@RequestParam int page, @RequestParam int size) {
        Page<ChargingStationBO> bos = service.getChargingStationsByPage(page, size);
        Page<ChargingStationDTO> dtos = bos.map(ChargingStationMapper::boToDto);
        return ResponseEntity.ok(dtos);
    }

    @GetMapping("/all")
    public ResponseEntity<Collection<ChargingStationDTO>> getAllChargingStations() {
        Collection<ChargingStationBO> bos = service.getAllChargingStations();
        Collection<ChargingStationDTO> dtos = bos.stream().map(ChargingStationMapper::boToDto).toList();
        return ResponseEntity.ok(dtos);
    }
}