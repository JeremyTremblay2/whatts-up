#!/bin/bash
set -e

# Variables
SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
CSV_FILE="$SCRIPT_DIR/consolidation-etalab-schema-irve-statique.csv"
TABLE_NAME="ev_charging_stations"
CLICKHOUSE_HOST="localhost"
CLICKHOUSE_PORT="9000"
CLICKHOUSE_USER="ec_admin"
CLICKHOUSE_PASSWORD="jk5Di!58fdG8dsC9"

# sleep for 5 seconds to wait for postgres to start
sleep 5

# Vérification de l'existence du fichier CSV
if [[ ! -f "$CSV_FILE" ]]; then
    echo "Erreur : Le fichier CSV $CSV_FILE est introuvable."
    exit 1
fi

echo "Création de la table $TABLE_NAME dans ClickHouse..."
clickhouse-client --host=$CLICKHOUSE_HOST --port=$CLICKHOUSE_PORT --user=$CLICKHOUSE_USER --password=$CLICKHOUSE_PASSWORD <<-EOSQL
DROP TABLE IF EXISTS $TABLE_NAME;

CREATE TABLE $TABLE_NAME (
    id UInt32,
    nom_amenageur Nullable(String),
    nom_operateur Nullable(String),
    nom_enseigne Nullable(String),
    id_station_itinerance Nullable(String),
    id_station_local Nullable(String),
    nom_station Nullable(String),
    implantation_station Nullable(String),
    adresse_station Nullable(String),
    coordonneesXY Nullable(String),
    nbre_pdc Int32,
    id_pdc_itinerance Nullable(String),
    id_pdc_local Nullable(String),
    puissance_nominale Nullable(Float64),
    prise_type_ef Nullable(Bool),
    prise_type_2 Nullable(Bool),
    prise_type_combo_ccs Nullable(Bool),
    prise_type_chademo Nullable(Bool),
    prise_type_autre Nullable(Bool),
    gratuit Nullable(Bool),
    paiement_acte Nullable(Bool),
    paiement_cb Nullable(String),
    paiement_autre Nullable(Bool),
    tarification Nullable(String),
    condition_acces Nullable(String),
    reservation Nullable(Bool),
    horaires Nullable(String),
    accessibilite_pmr Nullable(String),
    restriction_gabarit Nullable(String),
    station_deux_roues Nullable(Bool),
    raccordement Nullable(String),
    num_pdl Nullable(String),
    date_mise_en_service Nullable(Date),
    observations Nullable(String),
    date_maj Nullable(Date),
    cable_t2_attache Nullable(Bool),
    consolidated_longitude Nullable(Float64),
    consolidated_latitude Nullable(Float64),
    consolidated_code_postal Nullable(String),
    consolidated_commune Nullable(String),
) ENGINE = MergeTree()
ORDER BY id;
EOSQL

echo "Insertion des données depuis $CSV_FILE..."
clickhouse client --host "$CLICKHOUSE_HOST" \
                  --port "$CLICKHOUSE_PORT" \
                  --user "$CLICKHOUSE_USER" \
                  --password "$CLICKHOUSE_PASSWORD" \
                  --query "SET format_csv_delimiter = ';'; INSERT INTO $TABLE_NAME FORMAT CSVWithNames" < "$CSV_FILE"

echo "Importation terminée avec succès dans la table $TABLE_NAME."
