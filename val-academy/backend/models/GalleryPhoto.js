const mongoose = require('mongoose');

const galleryPhotoSchema = new mongoose.Schema({
  url: { type: String, required: true },
  title: String,
  formation: String,
  uploadedAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('GalleryPhoto', galleryPhotoSchema);
