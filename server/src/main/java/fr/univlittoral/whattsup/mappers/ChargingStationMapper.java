package fr.univlittoral.whattsup.mappers;

import fr.univlittoral.whattsup.model.bo.*;
import fr.univlittoral.whattsup.model.dto.*;
import fr.univlittoral.whattsup.model.entities.postgres.*;

public class ChargingStationMapper {

    public static ChargingStationBO dtoToBo(ChargingStationDTO dto) {
        if (dto == null) return null;
        return new ChargingStationBO(
                dto.getId(),
                dto.getName(),
                dto.getAddress(),
                dto.getCoordinates(),
                dto.getOperatorName(),
                dto.getManagerName(),
                dtoToBo(dto.getStationDetails()),
                dtoToBo(dto.getChargingPoint()),
                dto.getTwoWheelerStation(),
                dto.getCommissioningDate(),
                dto.getAccessibility(),
                dto.getObservations(),
                dto.getLastUpdate(),
                dtoToBo(dto.getLocationInfo())
        );
    }

    public static StationDetailsBO dtoToBo(StationDetailsDTO dto) {
        if (dto == null) return null;
        return new StationDetailsBO(
                dto.getItinerantStationId(),
                dto.getLocalStationId(),
                dto.getImplantation(),
                dto.getNumberOfChargingPoints(),
                dto.getReservationRequired(),
                dto.getAccessConditions(),
                dto.getOperatingHours()
        );
    }

    public static PaymentOptionsBO dtoToBo(PaymentOptionsDTO dto) {
        if (dto == null) return null;
        return new PaymentOptionsBO(
                dto.getPayPerUse(),
                dto.getCreditCardPayment(),
                dto.getOtherPaymentMethods()
        );
    }

    public static LocationInfoBO dtoToBo(LocationInfoDTO dto) {
        if (dto == null) return null;
        return new LocationInfoBO(
                dto.getLongitude(),
                dto.getLatitude(),
                dto.getPostalCode(),
                dto.getCity()
        );
    }

    public static ChargingPointBO dtoToBo(ChargingPointDTO dto) {
        if (dto == null) return null;
        return new ChargingPointBO(
                dto.getItinerantId(),
                dto.getLocalId(),
                dto.getNominalPower(),
                dtoToBo(dto.getConnectorTypes()),
                dto.getIsFree(),
                dtoToBo(dto.getPaymentOptions()),
                dto.getPricing()
        );
    }

    public static ChargingConnectorTypesBO dtoToBo(ChargingConnectorTypesDTO dto) {
        if (dto == null) return null;
        return new ChargingConnectorTypesBO(
                dto.getTypeEF(),
                dto.getType2(),
                dto.getComboCCS(),
                dto.getChademo(),
                dto.getOther(),
                dto.getAttachedCableT2()
        );
    }

    public static ChargingStationDTO boToDto(ChargingStationBO bo) {
        if (bo == null) return null;
        return new ChargingStationDTO(
                bo.getId(),
                bo.getName(),
                bo.getAddress(),
                bo.getCoordinates(),
                bo.getOperatorName(),
                bo.getManagerName(),
                boToDto(bo.getStationDetails()),
                boToDto(bo.getChargingPoint()),
                bo.getTwoWheelerStation(),
                bo.getCommissioningDate(),
                bo.getAccessibility(),
                bo.getObservations(),
                bo.getLastUpdate(),
                boToDto(bo.getLocationInfo())
        );
    }

    public static StationDetailsDTO boToDto(StationDetailsBO bo) {
        if (bo == null) return null;
        return new StationDetailsDTO(
                bo.getItinerantStationId(),
                bo.getLocalStationId(),
                bo.getImplantation(),
                bo.getNumberOfChargingPoints(),
                bo.getReservationRequired(),
                bo.getAccessConditions(),
                bo.getOperatingHours()
        );
    }

    public static PaymentOptionsDTO boToDto(PaymentOptionsBO bo) {
        if (bo == null) return null;
        return new PaymentOptionsDTO(
                bo.getPayPerUse(),
                bo.getCreditCardPayment(),
                bo.getOtherPaymentMethods()
        );
    }

    public static LocationInfoDTO boToDto(LocationInfoBO bo) {
        if (bo == null) return null;
        return new LocationInfoDTO(
                bo.getLongitude(),
                bo.getLatitude(),
                bo.getPostalCode(),
                bo.getCity()
        );
    }

    public static ChargingPointDTO boToDto(ChargingPointBO bo) {
        if (bo == null) return null;
        return new ChargingPointDTO(
                bo.getItinerantId(),
                bo.getLocalId(),
                bo.getNominalPower(),
                boToDto(bo.getConnectorTypes()),
                bo.getIsFree(),
                boToDto(bo.getPaymentOptions()),
                bo.getPricing()
        );
    }

    public static ChargingConnectorTypesDTO boToDto(ChargingConnectorTypesBO bo) {
        if (bo == null) return null;
        return new ChargingConnectorTypesDTO(
                bo.getTypeEF(),
                bo.getType2(),
                bo.getComboCCS(),
                bo.getChademo(),
                bo.getOther(),
                bo.getAttachedCableT2()
        );
    }

    public static ChargingStationBO entityToBo(ChargingStationEntity entity) {
        if (entity == null) return null;
        return new ChargingStationBO(
                entity.getId(),
                entity.getNomStation(),
                entity.getAdresseStation(),
                entity.getCoordonneesxy(),
                entity.getNomOperateur(),
                entity.getNomAmenageur(),
                new StationDetailsBO(entity.getIdStationItinerance(),
                        entity.getIdStationLocal(),
                        entity.getImplantationStation(),
                        entity.getNbrePdc(),
                        entity.getReservation(),
                        entity.getConditionAcces(),
                        entity.getHoraires()),
                new ChargingPointBO(entity.getIdPdcItinerance(),
                        entity.getIdPdcLocal(),
                        entity.getPuissanceNominale(),
                        new ChargingConnectorTypesBO(entity.getPriseTypeEf(),
                                entity.getPriseType2(),
                                entity.getPriseTypeComboCcs(),
                                entity.getPriseTypeChademo(),
                                entity.getPriseTypeAutre(),
                                entity.getCableT2Attache()),
                        entity.getGratuit(),
                        new PaymentOptionsBO(entity.getPaiementActe(),
                                entity.getPaiementCb(),
                                entity.getPaiementAutre()),
                        entity.getTarification()),
                entity.getStationDeuxRoues(),
                entity.getDateMiseEnService(),
                entity.getAccessibilitePmr(),
                entity.getObservations(),
                entity.getDateMaj(),
                new LocationInfoBO(entity.getConsolidatedLongitude(),
                        entity.getConsolidatedLatitude(),
                        entity.getConsolidatedCodePostal(),
                        entity.getConsolidatedCommune())
        );
    }

    public static ChargingStationEntity boToEntity(ChargingStationBO bo) {
        if (bo == null) return null;
        ChargingStationEntity entity = new ChargingStationEntity();
        entity.setId(bo.getId());
        entity.setNomStation(bo.getName());
        entity.setAdresseStation(bo.getAddress());
        entity.setCoordonneesxy(bo.getCoordinates());
        entity.setNomOperateur(bo.getOperatorName());
        entity.setNomAmenageur(bo.getManagerName());
        entity.setIdStationItinerance(bo.getStationDetails().getItinerantStationId());
        entity.setIdStationLocal(bo.getStationDetails().getLocalStationId());
        entity.setImplantationStation(bo.getStationDetails().getImplantation());
        entity.setNbrePdc(bo.getStationDetails().getNumberOfChargingPoints());
        entity.setReservation(bo.getStationDetails().getReservationRequired());
        entity.setConditionAcces(bo.getStationDetails().getAccessConditions());
        entity.setHoraires(bo.getStationDetails().getOperatingHours());
        entity.setIdPdcItinerance(bo.getChargingPoint().getItinerantId());
        entity.setIdPdcLocal(bo.getChargingPoint().getLocalId());
        entity.setPuissanceNominale(bo.getChargingPoint().getNominalPower());
        entity.setPriseTypeEf(bo.getChargingPoint().getConnectorTypes().getTypeEF());
        entity.setPriseType2(bo.getChargingPoint().getConnectorTypes().getType2());
        entity.setPriseTypeComboCcs(bo.getChargingPoint().getConnectorTypes().getComboCCS());
        entity.setPriseTypeChademo(bo.getChargingPoint().getConnectorTypes().getChademo());
        entity.setPriseTypeAutre(bo.getChargingPoint().getConnectorTypes().getOther());
        entity.setCableT2Attache(bo.getChargingPoint().getConnectorTypes().getAttachedCableT2());
        entity.setGratuit(bo.getChargingPoint().getIsFree());
        entity.setPaiementActe(bo.getChargingPoint().getPaymentOptions().getPayPerUse());
        entity.setPaiementCb(bo.getChargingPoint().getPaymentOptions().getCreditCardPayment());
        entity.setPaiementAutre(bo.getChargingPoint().getPaymentOptions().getOtherPaymentMethods());
        entity.setTarification(bo.getChargingPoint().getPricing());
        entity.setStationDeuxRoues(bo.getTwoWheelerStation());
        entity.setDateMiseEnService(bo.getCommissioningDate());
        entity.setAccessibilitePmr(bo.getAccessibility());
        entity.setObservations(bo.getObservations());
        entity.setDateMaj(bo.getLastUpdate());
        entity.setConsolidatedLongitude(bo.getLocationInfo().getLongitude());
        entity.setConsolidatedLatitude(bo.getLocationInfo().getLatitude());
        entity.setConsolidatedCodePostal(bo.getLocationInfo().getPostalCode());
        entity.setConsolidatedCommune(bo.getLocationInfo().getCity());
        return entity;
    }

    /*public static StationDetailsBO entityToBo(StationDetailsEntity entity) {
        if (entity == null) return null;
        return new StationDetailsBO(
                entity.getIdStationItinerance(),
                entity.getIdStationLocal(),
                entity.getImplantationStation(),
                entity.getNbrePdc(),
                entity.getReservation(),
                entity.getConditionAcces(),
                entity.getHoraires()
        );
    }

    public static PaymentOptionsBO entityToBo(PaymentOptionsEntity entity) {
        if (entity == null) return null;
        return new PaymentOptionsBO(
                entity.getPaiementActe(),
                entity.getPaiementCb(),
                entity.getPaiementAutre()
        );
    }

    public static LocationInfoBO entityToBo(LocationInfoEntity entity) {
        if (entity == null) return null;
        return new LocationInfoBO(
                entity.getConsolidatedLongitude(),
                entity.getConsolidatedLatitude(),
                entity.getConsolidatedCodePostal(),
                entity.getConsolidatedCommune()
        );
    }

    public static ChargingPointBO entityToBo(ChargingPointEntity entity) {
        if (entity == null) return null;
        return new ChargingPointBO(
                entity.getIdPdcItinerance(),
                entity.getIdPdcLocal(),
                entity.getPuissanceNominale(),
                entityToBo(entity.getConnectorTypes()),
                entity.getGratuit(),
                entityToBo(entity.getPaymentOptions()),
                entity.getTarification()
        );
    }

    public static ChargingConnectorTypesBO entityToBo(ChargingConnectorTypesEntity entity) {
        if (entity == null) return null;
        return new ChargingConnectorTypesBO(
                entity.getPriseTypeEf(),
                entity.getPriseType2(),
                entity.getPriseTypeComboCcs(),
                entity.getPriseTypeChademo(),
                entity.getPriseTypeAutre(),
                entity.getCableT2Attache()
        );
    }

    // BO to Entity
    public static ChargingStationEntity boToEntity(ChargingStationBO bo) {
        if (bo == null) return null;
        ChargingStationEntity entity = new ChargingStationEntity();
        entity.setId(bo.getId());
        entity.setNomStation(bo.getName());
        entity.setAdresseStation(bo.getAddress());
        entity.setCoordonneesxy(bo.getCoordinates());
        entity.setNomOperateur(bo.getOperatorName());
        entity.setNomAmenageur(bo.getManagerName());
        entity.setStationDetails(boToEntity(bo.getStationDetails()));
        entity.setChargingPoints(bo.getChargingPoint().stream().map(ChargingStationMapper::boToEntity).collect(Collectors.toList()));
        entity.setStationDeuxRoues(bo.getTwoWheelerStation());
        entity.setDateMiseEnService(bo.getCommissioningDate());
        entity.setAccessibilitePmr(bo.getAccessibility());
        entity.setObservations(bo.getObservations());
        entity.setDateMaj(bo.getLastUpdate());
        entity.setLocationInfo(boToEntity(bo.getLocationInfo()));
        return entity;
    }

    public static StationDetailsEntity boToEntity(StationDetailsBO bo) {
        if (bo == null) return null;
        StationDetailsEntity entity = new StationDetailsEntity();
        entity.setIdStationItinerance(bo.getItinerantStationId());
        entity.setIdStationLocal(bo.getLocalStationId());
        entity.setImplantationStation(bo.getImplantation());
        entity.setNbrePdc(bo.getNumberOfChargingPoints());
        entity.setReservation(bo.getReservationRequired());
        entity.setConditionAcces(bo.getAccessConditions());
        entity.setHoraires(bo.getOperatingHours());
        return entity;
    }

    public static PaymentOptionsEntity boToEntity(PaymentOptionsBO bo) {
        if (bo == null) return null;
        PaymentOptionsEntity entity = new PaymentOptionsEntity();
        entity.setPaiementActe(bo.getPayPerUse());
        entity.setPaiementCb(bo.getCreditCardPayment());
        entity.setPaiementAutre(bo.getOtherPaymentMethods());
        return entity;
    }

    public static LocationInfoEntity boToEntity(LocationInfoBO bo) {
        if (bo == null) return null;
        LocationInfoEntity entity = new LocationInfoEntity();
        entity.setConsolidatedLongitude(bo.getLongitude());
        entity.setConsolidatedLatitude(bo.getLatitude());
        entity.setConsolidatedCodePostal(bo.getPostalCode());
        entity.setConsolidatedCommune(bo.getCity());
        return entity;
    }

    public static ChargingPointEntity boToEntity(ChargingPointBO bo) {
        if (bo == null) return null;
        ChargingPointEntity entity = new ChargingPointEntity();
        entity.setIdPdcItinerance(bo.getItinerantId());
        entity.setIdPdcLocal(bo.getLocalId());
        entity.setPuissanceNominale(bo.getNominalPower());
        entity.setConnectorTypes(boToEntity(bo.getConnectorTypes()));
        entity.setGratuit(bo.getIsFree());
        entity.setPaymentOptions(boToEntity(bo.getPaymentOptions()));
        entity.setTarification(bo.getPricing());
        return entity;
    }

    public static ChargingConnectorTypesEntity boToEntity(ChargingConnectorTypesBO bo) {
        if (bo == null) return null;
        ChargingConnectorTypesEntity entity = new ChargingConnectorTypesEntity();
        entity.setPriseTypeEf(bo.getTypeEF());
        entity.setPriseType2(bo.getType2());
        entity.setPriseTypeComboCcs(bo.getComboCCS());
        entity.setPriseTypeChademo(bo.getChademo());
        entity.setPriseTypeAutre(bo.getOther());
        entity.setCableT2Attache(bo.getAttachedCableT2());
        return entity;
    }*/
}
