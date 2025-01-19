# Utiliser une image de base officielle de Node.js
FROM node:18-alpine AS build

# Définir le répertoire de travail dans le conteneur
WORKDIR /app

# Copier les fichiers package.json et package-lock.json
COPY package*.json ./

# Installer les dépendances
RUN npm install

# Copier le reste des fichiers de l'application
COPY . .

# Construire l'application
RUN npm run build

# Utiliser une image de base officielle de Nginx pour servir l'application
FROM nginx:alpine

# Copier les fichiers construits depuis l'étape de build
COPY --from=build /app/dist /usr/share/nginx/html

# Copier le fichier de configuration Nginx personnalisé
COPY nginx.conf /etc/nginx/nginx.conf

# Exposer le port sur lequel Nginx va écouter
EXPOSE 80

# Démarrer Nginx
CMD ["nginx", "-g", "daemon off;"]