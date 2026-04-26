const express = require('express');
const router = express.Router();
const GalleryPhoto = require('../models/GalleryPhoto');
const auth = require('../middleware/auth');
const { validatePhoto } = require('../middleware/validators');

// GET toutes les photos (public)
router.get('/', async (req, res) => {
  try {
    const photos = await GalleryPhoto.find().sort({ uploadedAt: -1 });
    res.json(photos);
  } catch (err) {
    res.status(500).json({ message: 'Erreur serveur' });
  }
});

// POST ajouter une photo (protégé)
router.post('/', auth, validatePhoto, async (req, res) => {
  try {
    const { url, title, formation } = req.body;
    const photo = await GalleryPhoto.create({ url, title, formation });
    res.status(201).json(photo);
  } catch (err) {
    res.status(500).json({ message: 'Erreur ajout photo' });
  }
});

// DELETE une photo (protégé)
router.delete('/:id', auth, async (req, res) => {
  try {
    await GalleryPhoto.findByIdAndDelete(req.params.id);
    res.json({ message: 'Photo supprimée' });
  } catch (err) {
    res.status(500).json({ message: 'Erreur suppression photo' });
  }
});

module.exports = router;
