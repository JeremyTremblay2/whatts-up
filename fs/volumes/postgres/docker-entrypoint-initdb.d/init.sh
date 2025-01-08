#!/bin/bash
set -e

# Variables
SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
CSV_FILE="$SCRIPT_DIR/consolidation-etalab-schema-irve-statique.csv"
TABLE_NAME="ev_charging_stations"
POSTGRES_USER="ec_admin"
POSTGRES_PASSWORD="jk5Di!58fdG8dsC9"
POSTGRES_DATABASE_NAME="default"

export PGPASSWORD="$POSTGRES_PASSWORD"

# Vérification de l'existence du fichier CSV
if [[ ! -f "$CSV_FILE" ]]; then
    echo "Erreur : Le fichier CSV $CSV_FILE est introuvable."
    exit 1
fi

# Vérification de l'existence de la base de données
if ! psql -U "$POSTGRES_USER" -lqt | cut -d \| -f 1 | grep -qw "$POSTGRES_DATABASE_NAME"; then
    echo "Création de la base de données $POSTGRES_DATABASE_NAME..."
    createdb -U "$POSTGRES_USER" "$POSTGRES_DATABASE_NAME"
fi

echo "Création de la table $TABLE_NAME dans Postgres..."
psql -U "$POSTGRES_USER" -d "$POSTGRES_DATABASE_NAME" -c "DROP TABLE IF EXISTS $TABLE_NAME;"

psql -U "$POSTGRES_USER" -d "$POSTGRES_DATABASE_NAME" <<EOSQL
CREATE TABLE $TABLE_NAME (
    id SERIAL PRIMARY KEY,
    nom_amenageur VARCHAR,
    nom_operateur VARCHAR,
    nom_enseigne VARCHAR,
    id_station_itinerance VARCHAR,
    id_station_local VARCHAR,
    nom_station VARCHAR,
    implantation_station VARCHAR,
    adresse_station VARCHAR,
    coordonneesXY VARCHAR,
    nbre_pdc INTEGER,
    id_pdc_itinerance VARCHAR,
    id_pdc_local VARCHAR,
    puissance_nominale DOUBLE PRECISION,
    prise_type_ef BOOLEAN,
    prise_type_2 BOOLEAN,
    prise_type_combo_ccs BOOLEAN,
    prise_type_chademo BOOLEAN,
    prise_type_autre BOOLEAN,
    gratuit BOOLEAN,
    paiement_acte BOOLEAN,
    paiement_cb VARCHAR,
    paiement_autre BOOLEAN,
    tarification VARCHAR,
    condition_acces VARCHAR,
    reservation BOOLEAN,
    horaires VARCHAR,
    accessibilite_pmr VARCHAR,
    restriction_gabarit VARCHAR,
    station_deux_roues BOOLEAN,
    raccordement VARCHAR,
    num_pdl VARCHAR,
    date_mise_en_service TIMESTAMP,
    observations VARCHAR,
    date_maj DATE,
    cable_t2_attache BOOLEAN,
    consolidated_longitude DOUBLE PRECISION,
    consolidated_latitude DOUBLE PRECISION,
    consolidated_code_postal VARCHAR,
    consolidated_commune VARCHAR
);
EOSQL

echo "Insertion des données depuis $CSV_FILE..."
cat "$CSV_FILE" | psql -U "$POSTGRES_USER" -d "$POSTGRES_DATABASE_NAME" -c "COPY $TABLE_NAME FROM STDIN DELIMITER ';' CSV HEADER;"

echo "Importation terminée avec succès dans la table $TABLE_NAME."