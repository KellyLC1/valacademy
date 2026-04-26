const mongoose = require('mongoose');

const formationSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: String,
  duration: String,
  price: String,
  image: String, // URL de l'image de fond
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Formation', formationSchema);
