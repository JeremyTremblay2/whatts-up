<h1 align="center">🚀 Whatt's Up 📱</h1>

Whatts'up est une application permettant de gérer et d'afficher des informations sur les stations de recharge électrique en France.

## ✔️ Fonctionnalités

- [x] Affichage des informations de chaque station de recharge électrique pour voiture en France.
- [x] Histogrammes et données analytiques sur l'évolution du nombre de stations électriques en France par année, par mois et par département.
- [x] Système de tri dans l'affichage des résultats.
- [x] Système de connexion et de gestion de compte.

## 📱 Application

Voici un aperçu du rendu visuel actuel de l'application web :

<p align="center">
    <img src="./doc/presentation.gif" height="600"/>
</p>
<p align="center">
    <i>
        Dans l'application, les utilisateurs peuvent retrouver les différentes stations électriques, obtenir des informations, accéder aux histogrammes et gérer leur compte.
    </i>
</p>

## 🖥️ Technologies utilisées

- **React** (Frontend)
- **Spring Boot** (Backend)
- **PostgreSQL & Clickhouse** (Bases de données)
- **Protobuf** (Communication optimisée entre services)
- **Docker** (Conteneurisation des projets)

> Plus d'informations sur l'architure de ce projet sont disponibles [ici](doc/README.md).

## 🧵 Prérequis

- [Node.js](https://nodejs.org/)
- [Java JDK 17+](https://adoptium.net/)
- [Spring](https://spring.io/)
- [PostgreSQL](https://www.postgresql.org/)
- [Clickhouse](https://clickhouse.com/)

## ⚙️ Comment exécuter l'application ?

Nous avons testé ce déroulement depuis nos machines sous Windows et tout était fonctionnel. Normalement cela devrait également fonctionner pour les autres systèmes d'exploitation.

Pour exécuter l'application seul Docker est nécessaire.

### 1. Clonez ce dépôt :

```bash
git clone https://github.com/JeremyTremblay2/whatts-up
```

### 2. Placez-vous dans le dossier de ce dépôt

```bash
cd whatts-up
```

### 3. Lancez l'execution du docker-compose

Il faut tout d'abord démarrer Docker.

Il va créer la base de données clickhouse et la peupler, la base de données postgres, son schéma et ses données, ainsi que l'API qu'il va lancer et le _front_ qu'il va également démarrer. Attendez quelque secondes que tout démarre correctement.

```bash
docker compose up --build
```

> Il est possible qu'un problème survienne lors de l'exécution des scripts d'initialisation. En cas de problème, vérifiez que les sauts de ligne dans les fichiers `init.sh` de [Postgres](./server/fs/volumes/postgres/docker-entrypoint-initdb.d/init.sh) et [ClickHouse](./server/fs/volumes/clickhouse/docker-entrypoint-initdb.d/init.sh) sont bien au format LF, puis réexécutez la commande `docker compose up --build`.

### 4. Testez !

Vous n'avez qu'à vous rendre sur votre domaine [http://localhost:80/index.html](http://localhost:80/) ou si vous le souhaitez vous pourrez accéder au swagger via [http://localhost:8080/swagger](http://localhost:8080/swagger) afin de tester les routes de l'application.

# 📌 Documentation

Ce fichier fait état de documentation pour ce projet. Plus d'informations sont à venir !
Vous pouvez aussi consulter le dossier `doc` pour plus d'informations, vous y trouverez notamment une description approfondie de l'architecture et divers schémas.

Si vous avez un problème ou une question, vous pouvez contacter les auteurs de ce dépôt.

# 👤 Auteurs

**TREMBLAY Jérémy**

- Github: [@JeremyTremblay2](https://github.com/JeremyTremblay2)
- LinkedIn: [@Jérémy Tremlay](https://fr.linkedin.com/in/j%C3%A9r%C3%A9my-tremblay2)

**CROISIER Maxime**

- Github: [@Emixam309](https://github.com/Emixam309)
- LinkedIn: [@Maxime Croisier](https://www.linkedin.com/in/maxime-croisier-425131220/)

⚠️ Disclaimer

Le fichier de données CSV utilisé pour l'initialisation de la base de données ne nous appartient pas, mais peut être retrouvé sur le site officiel du gouvernement Français [ici](https://www.data.gouv.fr/fr/datasets/fichier-consolide-des-bornes-de-recharge-pour-vehicules-electriques/). Les données extraites n'ont pas été modifiées.

# 📝 Licence

Ce projet est sous licence MIT pour permettre son amélioration et son évolution par la communauté.

Plus d'informations sur la [licence MIT](https://opensource.org/licenses/MIT).
