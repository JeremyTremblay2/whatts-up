package fr.univlittoral.whattsup.model.entities.postgres;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.time.LocalDate;
import java.time.LocalDateTime;

@Entity
@Table(name = "ev_charging_stations")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class ChargingStationEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @Column(name = "nom_amenageur")
    private String managerName;

    @Column(name = "nom_operateur")
    private String operatorName;

    @Column(name = "nom_enseigne")
    private String brandName;

    @Column(name = "id_station_itinerance")
    private String itinerantStationId;

    @Column(name = "id_station_local")
    private String localStationId;

    @Column(name = "nom_station")
    private String name;

    @Column(name = "implantation_station")
    private String implantation;

    @Column(name = "adresse_station")
    private String address;

    @Column(name = "coordonneesXY")
    private String coordinates;

    @Column(name = "nbre_pdc")
    private Integer numberOfChargingPoints;

    @Column(name = "id_pdc_itinerance")
    private String itinerantId;

    @Column(name = "id_pdc_local")
    private String localId;

    @Column(name = "puissance_nominale")
    private Double nominalPower;

    @Column(name = "prise_type_ef")
    private Boolean typeEF;

    @Column(name = "prise_type_2")
    private Boolean type2;

    @Column(name = "prise_type_combo_ccs")
    private Boolean comboCCS;

    @Column(name = "prise_type_chademo")
    private Boolean chademo;

    @Column(name = "prise_type_autre")
    private Boolean other;

    @Column(name = "gratuit")
    private Boolean isFree;

    @Column(name = "paiement_acte")
    private Boolean payPerUse;

    @Column(name = "paiement_cb")
    private String creditCardPayment;

    @Column(name = "paiement_autre")
    private Boolean otherPaymentMethods;

    @Column(name = "tarification")
    private String pricing;

    @Column(name = "condition_acces")
    private String accessConditions;

    @Column(name = "reservation")
    private Boolean reservationRequired;

    @Column(name = "horaires")
    private String operatingHours;

    @Column(name = "raccordement")
    private String connectionType;

    @Column(name = "accessibilite_pmr")
    private String accessibility;

    @Column(name = "restriction_gabarit")
    private String templateRestrictions;

    @Column(name = "station_deux_roues")
    private Boolean twoWheelerStation;

    @Column(name = "num_pdl")
    private String deliveryPointNumber;

    @Column(name = "date_mise_en_service")
    private LocalDateTime commissioningDate;

    @Column(name = "observations")
    private String observations;

    @Column(name = "date_maj")
    private LocalDate lastUpdate;

    @Column(name = "cable_t2_attache")
    private Boolean attachedCableT2;

    @Column(name = "consolidated_longitude")
    private Double longitude;

    @Column(name = "consolidated_latitude")
    private Double latitude;

    @Column(name = "consolidated_code_postal")
    private String postalCode;

    @Column(name = "consolidated_commune")
    private String city;
}