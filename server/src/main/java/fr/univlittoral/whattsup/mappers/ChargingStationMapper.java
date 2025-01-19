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
                dto.getBrandName(),
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
                dto.getOperatingHours(),
                dto.getDeliveryPointNumber(),
                dto.getTemplateRestrictions()
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
                dto.getAttachedCableT2(),
                dto.getConnectionType()
        );
    }

    public static ChargingStationDTO boToDto(ChargingStationBO bo) {
        if (bo == null) return null;
        return new ChargingStationDTO(
                bo.getId(),
                bo.getName(),
                bo.getBrandName(),
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
                bo.getOperatingHours(),
                bo.getDeliveryPointNumber(),
                bo.getTemplateRestrictions()
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
                bo.getAttachedCableT2(),
                bo.getConnectionType()
        );
    }

    public static ChargingStationBO entityToBo(ChargingStationEntity entity) {
        if (entity == null) return null;
        return new ChargingStationBO(
                entity.getId(),
                entity.getName(),
                entity.getBrandName(),
                entity.getAddress(),
                entity.getCoordinates(),
                entity.getOperatorName(),
                entity.getManagerName(),
                new StationDetailsBO(entity.getItinerantStationId(),
                        entity.getLocalStationId(),
                        entity.getImplantation(),
                        entity.getNumberOfChargingPoints(),
                        entity.getReservationRequired(),
                        entity.getAccessConditions(),
                        entity.getOperatingHours(),
                        entity.getDeliveryPointNumber(),
                        entity.getTemplateRestrictions()),
                new ChargingPointBO(entity.getItinerantId(),
                        entity.getLocalId(),
                        entity.getNominalPower(),
                        new ChargingConnectorTypesBO(entity.getTypeEF(),
                                entity.getType2(),
                                entity.getComboCCS(),
                                entity.getChademo(),
                                entity.getOther(),
                                entity.getAttachedCableT2(),
                                entity.getConnectionType()),
                        entity.getIsFree(),
                        new PaymentOptionsBO(entity.getPayPerUse(),
                                entity.getCreditCardPayment(),
                                entity.getOtherPaymentMethods()),
                        entity.getPricing()),
                entity.getTwoWheelerStation(),
                entity.getCommissioningDate(),
                entity.getAccessibility(),
                entity.getObservations(),
                entity.getLastUpdate(),
                new LocationInfoBO(entity.getLongitude(),
                        entity.getLatitude(),
                        entity.getPostalCode(),
                        entity.getCity())
        );
    }

    public static ChargingStationEntity boToEntity(ChargingStationBO bo) {
        if (bo == null) return null;
        ChargingStationEntity entity = new ChargingStationEntity();
        entity.setId(bo.getId());
        entity.setName(bo.getName());
        entity.setAddress(bo.getAddress());
        entity.setCoordinates(bo.getCoordinates());
        entity.setOperatorName(bo.getOperatorName());
        entity.setManagerName(bo.getManagerName());
        entity.setItinerantStationId(bo.getStationDetails().getItinerantStationId());
        entity.setLocalStationId(bo.getStationDetails().getLocalStationId());
        entity.setImplantation(bo.getStationDetails().getImplantation());
        entity.setNumberOfChargingPoints(bo.getStationDetails().getNumberOfChargingPoints());
        entity.setReservationRequired(bo.getStationDetails().getReservationRequired());
        entity.setAccessConditions(bo.getStationDetails().getAccessConditions());
        entity.setOperatingHours(bo.getStationDetails().getOperatingHours());
        entity.setItinerantId(bo.getChargingPoint().getItinerantId());
        entity.setLocalId(bo.getChargingPoint().getLocalId());
        entity.setNominalPower(bo.getChargingPoint().getNominalPower());
        entity.setTypeEF(bo.getChargingPoint().getConnectorTypes().getTypeEF());
        entity.setType2(bo.getChargingPoint().getConnectorTypes().getType2());
        entity.setComboCCS(bo.getChargingPoint().getConnectorTypes().getComboCCS());
        entity.setChademo(bo.getChargingPoint().getConnectorTypes().getChademo());
        entity.setOther(bo.getChargingPoint().getConnectorTypes().getOther());
        entity.setAttachedCableT2(bo.getChargingPoint().getConnectorTypes().getAttachedCableT2());
        entity.setIsFree(bo.getChargingPoint().getIsFree());
        entity.setPayPerUse(bo.getChargingPoint().getPaymentOptions().getPayPerUse());
        entity.setCreditCardPayment(bo.getChargingPoint().getPaymentOptions().getCreditCardPayment());
        entity.setOtherPaymentMethods(bo.getChargingPoint().getPaymentOptions().getOtherPaymentMethods());
        entity.setPricing(bo.getChargingPoint().getPricing());
        entity.setTwoWheelerStation(bo.getTwoWheelerStation());
        entity.setCommissioningDate(bo.getCommissioningDate());
        entity.setAccessibility(bo.getAccessibility());
        entity.setObservations(bo.getObservations());
        entity.setLastUpdate(bo.getLastUpdate());
        entity.setLongitude(bo.getLocationInfo().getLongitude());
        entity.setLatitude(bo.getLocationInfo().getLatitude());
        entity.setPostalCode(bo.getLocationInfo().getPostalCode());
        entity.setCity(bo.getLocationInfo().getCity());
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
