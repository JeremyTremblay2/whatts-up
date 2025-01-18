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
    private String nomAmenageur;

    @Column(name = "nom_operateur")
    private String nomOperateur;

    @Column(name = "nom_enseigne")
    private String nomEnseigne;

    @Column(name = "id_station_itinerance")
    private String idStationItinerance;

    @Column(name = "id_station_local")
    private String idStationLocal;

    @Column(name = "nom_station")
    private String nomStation;

    @Column(name = "implantation_station")
    private String implantationStation;

    @Column(name = "adresse_station")
    private String adresseStation;

    @Column(name = "coordonneesXY")
    private String coordonneesxy;

    @Column(name = "nbre_pdc")
    private Integer nbrePdc;

    @Column(name = "id_pdc_itinerance")
    private String idPdcItinerance;

    @Column(name = "id_pdc_local")
    private String idPdcLocal;

    @Column(name = "puissance_nominale")
    private Double puissanceNominale;

    @Column(name = "prise_type_ef")
    private Boolean priseTypeEf;

    @Column(name = "prise_type_2")
    private Boolean priseType2;

    @Column(name = "prise_type_combo_ccs")
    private Boolean priseTypeComboCcs;

    @Column(name = "prise_type_chademo")
    private Boolean priseTypeChademo;

    @Column(name = "prise_type_autre")
    private Boolean priseTypeAutre;

    private Boolean gratuit;

    @Column(name = "paiement_acte")
    private Boolean paiementActe;

    @Column(name = "paiement_cb")
    private String paiementCb;

    @Column(name = "paiement_autre")
    private Boolean paiementAutre;

    private String tarification;

    @Column(name = "condition_acces")
    private String conditionAcces;

    private Boolean reservation;

    private String horaires;

    @Column(name = "accessibilite_pmr")
    private String accessibilitePmr;

    @Column(name = "restriction_gabarit")
    private String restrictionGabarit;

    @Column(name = "station_deux_roues")
    private Boolean stationDeuxRoues;

    private String raccordement;

    @Column(name = "num_pdl")
    private String numPdl;

    @Column(name = "date_mise_en_service")
    private LocalDateTime dateMiseEnService;

    private String observations;

    @Column(name = "date_maj")
    private LocalDate dateMaj;

    @Column(name = "cable_t2_attache")
    private Boolean cableT2Attache;

    @Column(name = "consolidated_longitude")
    private Double consolidatedLongitude;

    @Column(name = "consolidated_latitude")
    private Double consolidatedLatitude;

    @Column(name = "consolidated_code_postal")
    private String consolidatedCodePostal;

    @Column(name = "consolidated_commune")
    private String consolidatedCommune;
}