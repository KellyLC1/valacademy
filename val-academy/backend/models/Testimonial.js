const mongoose = require('mongoose');

const testimonialSchema = new mongoose.Schema({
  name: String, // plus requis à la création
  text: String, // plus requis à la création
  createdAt: { type: Date, default: Date.now },
  validated: { type: Boolean, default: false },
  inviteToken: { type: String, unique: true, sparse: true },
  email: String
});

module.exports = mongoose.model('Testimonial', testimonialSchema);
