# Val'Academy

Plateforme complète pour centre de formation professionnelle : gestion des formations, galerie photos, avis clients dynamiques, et espace admin sécurisé.

## Technologies utilisées

- **Frontend** : Vue.js 3, Vite, Axios, Swiper, CSS3
- **Backend** : Node.js, Express, Mongoose (MongoDB), JWT, bcryptjs, express-rate-limit, express-validator, CORS, Nodemailer
- **Outils de développement** : Mailtrap (test email), Git, VS Code

## Fonctionnalités principales

- **Frontend Vue.js 3**
  - Affichage dynamique des formations (slider, modale, animations)
  - Galerie photos (masonry, zoom, responsive)
  - Affichage des avis clients validés
  - Formulaire d’avis sécurisé via lien d’invitation
  - Tableau de bord admin (CRUD formations, galerie, avis, invitations)
  - Authentification admin JWT

- **Backend Node.js/Express/MongoDB**
  - API REST sécurisée (CORS, rate limit, validation)
  - Modèles Mongoose : User (admin), Formation, GalleryPhoto, Testimonial
  - Gestion des invitations d’avis par email (Mailtrap/Nodemailer)
  - CRUD formations, galerie, avis (admin)
  - Génération de tokens d’invitation uniques

## Installation & développement

1. **Cloner le repo**
2. **Installer les dépendances**
   - Backend :
     ```bash
     cd val-academy/backend
     npm install
     ```
   - Frontend :
     ```bash
     cd ../
     npm install
     ```
3. **Configurer les variables d’environnement**
   - Backend : `.env` (voir `.env.example`)
   - Frontend : (optionnel)
4. **Lancer le backend**
   ```bash
   cd backend
   npm start
   ```
5. **Lancer le frontend**
   ```bash
   cd ..
   npm run dev
   ```


### Création de l’admin
- Après installation, créer un compte admin avec le script dédié :
  ```bash
  cd backend
  node scripts/createAdmin.js
  ```
- Suivre les instructions pour définir l’email et le mot de passe admin.

## Fonctionnement des avis clients

- L’admin génère une invitation (email du client)
- Le client reçoit un lien unique (token)
- Il accède à un formulaire sécurisé pour laisser son avis
- L’avis est validé et affiché publiquement après soumission

## Sécurité
- Authentification JWT pour l’admin
- Rate limiting, validation stricte, CORS restreint
- Suppression automatique des invitations d’avis en doublon

## Déploiement
- Compatible Render, Railway, Vercel, Netlify, etc.
- Variables d’environnement à adapter en production (MongoDB, SMTP, JWT, etc.)

## Démo & tests
- Envoi d’emails en sandbox avec Mailtrap (voir `.env`)
- Toutes les fonctionnalités testées en local et prêtes pour la production

## Auteur
- KellyLC1

---

Pour toute question ou aide au déploiement, voir le README ou contacter le mainteneur.

