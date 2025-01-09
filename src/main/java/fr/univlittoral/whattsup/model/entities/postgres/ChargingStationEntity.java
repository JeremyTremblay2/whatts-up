package fr.univlittoral.whattsup.model.entities.postgres;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.time.LocalDate;
import java.time.LocalDateTime;

@Entity
@Table(name = "ev_charging_station")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class ChargingStationEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    private String nomAmenageur;
    private String nomOperateur;
    private String nomEnseigne;
    private String idStationItinerance;
    private String idStationLocal;
    private String nomStation;
    private String implantationStation;
    private String adresseStation;
    private String coordonneesxy;
    private Integer nbrePdc;
    private String idPdcItinerance;
    private String idPdcLocal;
    private Double puissanceNominale;
    private Boolean priseTypeEf;
    private Boolean priseType2;
    private Boolean priseTypeComboCcs;
    private Boolean priseTypeChademo;
    private Boolean priseTypeAutre;
    private Boolean gratuit;
    private Boolean paiementActe;
    private String paiementCb;
    private Boolean paiementAutre;
    private String tarification;
    private String conditionAcces;
    private Boolean reservation;
    private String horaires;
    private String accessibilitePmr;
    private String restrictionGabarit;
    private Boolean stationDeuxRoues;
    private String raccordement;
    private String numPdl;
    private LocalDateTime dateMiseEnService;
    private String observations;
    private LocalDate dateMaj;
    private Boolean cableT2Attache;
    private Double consolidatedLongitude;
    private Double consolidatedLatitude;
    private String consolidatedCodePostal;
    private String consolidatedCommune;
}