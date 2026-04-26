require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();

const allowedOrigins = [
  'http://localhost:5173', // Frontend local
  // Ajoute ici d'autres domaines autorisés
];

const corsOptions = {
  origin: function (origin, callback) {
    if (!origin || allowedOrigins.indexOf(origin) !== -1) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
  credentials: true,
};

app.use(cors(corsOptions));
app.use(express.json());

// Connexion à MongoDB
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('MongoDB connecté'))
.catch((err) => console.error('Erreur MongoDB:', err));

// Exemple de route pour le formulaire de contact
const contactRoutes = require('./routes/contact');
const inscriptionRoutes = require('./routes/inscription');
const adminRoutes = require('./routes/admin');
const galleryRoutes = require('./routes/gallery');
const formationRoutes = require('./routes/formation');
const testimonialRoutes = require('./routes/testimonial');
app.use('/api/contact', contactRoutes);
app.use('/api/inscription', inscriptionRoutes);
app.use('/api/admin', adminRoutes);
app.use('/api/gallery', galleryRoutes);
app.use('/api/formation', formationRoutes);
app.use('/api/testimonials', testimonialRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Serveur backend démarré sur le port ${PORT}`);
});
