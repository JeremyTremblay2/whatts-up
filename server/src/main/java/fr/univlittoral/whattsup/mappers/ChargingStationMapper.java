package fr.univlittoral.whattsup.mappers;

import com.google.protobuf.BoolValue;
import com.google.protobuf.DoubleValue;
import com.google.protobuf.Int32Value;
import com.google.protobuf.StringValue;
import fr.univlittoral.protobuf.*;
import fr.univlittoral.whattsup.model.bo.*;
import fr.univlittoral.whattsup.model.dto.*;
import fr.univlittoral.whattsup.model.entities.postgres.*;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;

public class ChargingStationMapper {
    private static final DateTimeFormatter dateTimeFormatter = DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss");
    private static final DateTimeFormatter dateFormatter = DateTimeFormatter.ofPattern("yyyy-MM-dd");

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


    public static ChargingStationProto boToProto(ChargingStationBO bo) {
        if (bo == null) return null;

        return ChargingStationProto.newBuilder()
                .setId(bo.getId())
                .setName(wrap(bo.getName()))
                .setBrandName(wrap(bo.getBrandName()))
                .setAddress(wrap(bo.getAddress()))
                .setCoordinates(wrap(bo.getCoordinates()))
                .setOperatorName(wrap(bo.getOperatorName()))
                .setManagerName(wrap(bo.getManagerName()))
                .setStationDetails(boToProto(bo.getStationDetails()))
                .setChargingPoint(boToProto(bo.getChargingPoint()))
                .setTwoWheelerStation(wrap(bo.getTwoWheelerStation()))
                .setCommissioningDate(wrap(bo.getCommissioningDate(), dateFormatter))
                .setAccessibility(wrap(bo.getAccessibility()))
                .setObservations(wrap(bo.getObservations()))
                .setLastUpdate(wrap(bo.getLastUpdate(), dateFormatter))
                .setLocationInfo(boToProto(bo.getLocationInfo()))
                .build();
    }

    public static StationDetailsProto boToProto(StationDetailsBO bo) {
        if (bo == null) return null;
        return StationDetailsProto.newBuilder()
                .setItinerantStationId(wrap(bo.getItinerantStationId()))
                .setLocalStationId(wrap(bo.getLocalStationId()))
                .setImplantation(wrap(bo.getImplantation()))
                .setNumberOfChargingPoints(wrap(bo.getNumberOfChargingPoints()))
                .setReservationRequired(wrap(bo.getReservationRequired()))
                .setAccessConditions(wrap(bo.getAccessConditions()))
                .setOperatingHours(wrap(bo.getOperatingHours()))
                .setDeliveryPointNumber(wrap(bo.getDeliveryPointNumber()))
                .setTemplateRestrictions(wrap(bo.getTemplateRestrictions()))
                .build();
    }

    public static PaymentOptionsProto boToProto(PaymentOptionsBO bo) {
        if (bo == null) return null;
        return PaymentOptionsProto.newBuilder()
                .setPayPerUse(wrap(bo.getPayPerUse()))
                .setCreditCardPayment(wrap(bo.getCreditCardPayment()))
                .setOtherPaymentMethods(wrap(bo.getOtherPaymentMethods()))
                .build();
    }

    public static LocationInfoProto boToProto(LocationInfoBO bo) {
        if (bo == null) return null;
        return LocationInfoProto.newBuilder()
                .setLongitude(wrap(bo.getLongitude()))
                .setLatitude(wrap(bo.getLatitude()))
                .setPostalCode(wrap(bo.getPostalCode()))
                .setCity(wrap(bo.getCity()))
                .build();
    }

    public static ChargingPointProto boToProto(ChargingPointBO bo) {
        if (bo == null) return null;
        return ChargingPointProto.newBuilder()
                .setItinerantId(wrap(bo.getItinerantId()))
                .setLocalId(wrap(bo.getLocalId()))
                .setNominalPower(wrap(bo.getNominalPower()))
                .setConnectorTypes(boToProto(bo.getConnectorTypes()))
                .setIsFree(wrap(bo.getIsFree()))
                .setPaymentOptions(boToProto(bo.getPaymentOptions()))
                .setPricing(wrap(bo.getPricing()))
                .build();
    }

    public static ChargingConnectorTypesProto boToProto(ChargingConnectorTypesBO bo) {
        if (bo == null) return null;
        return ChargingConnectorTypesProto.newBuilder()
                .setTypeEF(wrap(bo.getTypeEF()))
                .setType2(wrap(bo.getType2()))
                .setComboCCS(wrap(bo.getComboCCS()))
                .setChademo(wrap(bo.getChademo()))
                .setOther(wrap(bo.getOther()))
                .setAttachedCableT2(wrap(bo.getAttachedCableT2()))
                .setConnectionType(wrap(bo.getConnectionType()))
                .build();
    }

    public static ChargingStationBO protoToBo(ChargingStationProto proto) {
        if (proto == null) return null;
        return new ChargingStationBO(
                proto.getId(),
                unwrap(proto.getName()),
                unwrap(proto.getBrandName()),
                unwrap(proto.getAddress()),
                unwrap(proto.getCoordinates()),
                unwrap(proto.getOperatorName()),
                unwrap(proto.getManagerName()),
                protoToBo(proto.getStationDetails()),
                protoToBo(proto.getChargingPoint()),
                unwrap(proto.getTwoWheelerStation()),
                parseLocalDateTime(unwrap(proto.getCommissioningDate()), dateTimeFormatter),
                unwrap(proto.getAccessibility()),
                unwrap(proto.getObservations()),
                parseLocalDate(unwrap(proto.getLastUpdate()), dateFormatter),
                protoToBo(proto.getLocationInfo())
        );
    }

    public static StationDetailsBO protoToBo(StationDetailsProto proto) {
        if (proto == null) return null;
        return new StationDetailsBO(
                unwrap(proto.getItinerantStationId()),
                unwrap(proto.getLocalStationId()),
                unwrap(proto.getImplantation()),
                unwrap(proto.getNumberOfChargingPoints()),
                unwrap(proto.getReservationRequired()),
                unwrap(proto.getAccessConditions()),
                unwrap(proto.getOperatingHours()),
                unwrap(proto.getDeliveryPointNumber()),
                unwrap(proto.getTemplateRestrictions())
        );
    }

    public static PaymentOptionsBO protoToBo(PaymentOptionsProto proto) {
        if (proto == null) return null;
        return new PaymentOptionsBO(
                unwrap(proto.getPayPerUse()),
                unwrap(proto.getCreditCardPayment()),
                unwrap(proto.getOtherPaymentMethods())
        );
    }

    public static LocationInfoBO protoToBo(LocationInfoProto proto) {
        if (proto == null) return null;
        return new LocationInfoBO(
                unwrap(proto.getLongitude()),
                unwrap(proto.getLatitude()),
                unwrap(proto.getPostalCode()),
                unwrap(proto.getCity())
        );
    }

    public static ChargingPointBO protoToBo(ChargingPointProto proto) {
        if (proto == null) return null;
        return new ChargingPointBO(
                unwrap(proto.getItinerantId()),
                unwrap(proto.getLocalId()),
                unwrap(proto.getNominalPower()),
                protoToBo(proto.getConnectorTypes()),
                unwrap(proto.getIsFree()),
                protoToBo(proto.getPaymentOptions()),
                unwrap(proto.getPricing())
        );
    }

    public static ChargingConnectorTypesBO protoToBo(ChargingConnectorTypesProto proto) {
        if (proto == null) return null;
        return new ChargingConnectorTypesBO(
                unwrap(proto.getTypeEF()),
                unwrap(proto.getType2()),
                unwrap(proto.getComboCCS()),
                unwrap(proto.getChademo()),
                unwrap(proto.getOther()),
                unwrap(proto.getAttachedCableT2()),
                unwrap(proto.getConnectionType())
        );
    }

    private static LocalDateTime parseLocalDateTime(String dateStr, DateTimeFormatter formatter) {
        return (dateStr == null || dateStr.isEmpty()) ? null : LocalDateTime.parse(dateStr, formatter);
    }

    private static LocalDate parseLocalDate(String dateStr, DateTimeFormatter formatter) {
        return (dateStr == null || dateStr.isEmpty()) ? null : LocalDate.parse(dateStr, formatter);
    }

    private static StringValue wrap(String value) {
        return value == null ? StringValue.getDefaultInstance() : StringValue.of(value);
    }

    private static BoolValue wrap(Boolean value) {
        return value == null ? BoolValue.getDefaultInstance() : BoolValue.of(value);
    }

    private static Int32Value wrap(Integer value) {
        return value == null ? Int32Value.getDefaultInstance() : Int32Value.of(value);
    }

    private static DoubleValue wrap(Double value) {
        return value == null ? DoubleValue.getDefaultInstance() : DoubleValue.of(value);
    }

    private static StringValue wrap(LocalDate value, DateTimeFormatter formatter) {
        return value == null ? StringValue.getDefaultInstance() : StringValue.of(value.format(formatter));
    }

    private static StringValue wrap(LocalDateTime value, DateTimeFormatter formatter) {
        return value == null ? StringValue.getDefaultInstance() : StringValue.of(value.format(formatter));
    }

    private static String unwrap(StringValue value) {
        return value == null || value.getValue().isEmpty() ? null : value.getValue();
    }

    private static Boolean unwrap(BoolValue value) {
        return value == null ? null : value.getValue();
    }

    private static Integer unwrap(Int32Value value) {
        return value == null ? null : value.getValue();
    }

    private static Double unwrap(DoubleValue value) {
        return value == null ? null : value.getValue();
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
