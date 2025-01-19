# Utiliser une image de base Maven pour construire l'application
FROM maven:3.8.4-openjdk-17 AS build

# Définir le répertoire de travail dans le conteneur
WORKDIR /app

# Copier les fichiers de l'application dans le conteneur
COPY . .

# Construire l'application
RUN mvn clean package -DskipTests

# Ajouter une étape de débogage pour lister les fichiers dans le répertoire target
RUN ls -l /app/target

# Utiliser une image de base Java pour exécuter l'application
FROM openjdk:17-jdk-slim

# Définir le répertoire de travail dans le conteneur
WORKDIR /app

# Copier le fichier JAR généré depuis l'étape de build
COPY --from=build /app/target/*.jar app.jar

# Exposer le port sur lequel l'application s'exécute
EXPOSE 8080

# Définir la commande pour exécuter l'application
ENTRYPOINT ["java", "-jar", "app.jar"]