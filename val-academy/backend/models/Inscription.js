const mongoose = require('mongoose');

const inscriptionSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: String, required: true },
  formation: { type: String, required: true },
  city: { type: String },
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Inscription', inscriptionSchema);
