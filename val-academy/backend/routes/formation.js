const express = require('express');
const router = express.Router();
const Formation = require('../models/Formation');
const auth = require('../middleware/auth');
const { validateFormation } = require('../middleware/validators');

// GET toutes les formations
router.get('/', async (req, res) => {
  try {
    const formations = await Formation.find().sort({ createdAt: -1 });
    res.json(formations);
  } catch (err) {
    res.status(500).json({ message: 'Erreur serveur' });
  }
});

// POST ajouter une formation (protégé)
router.post('/', auth, validateFormation, async (req, res) => {
  try {
    const { title, description, duration, price } = req.body;
    const formation = await Formation.create({ title, description, duration, price });
    res.status(201).json(formation);
  } catch (err) {
    res.status(500).json({ message: 'Erreur ajout formation' });
  }
});

// PUT modifier une formation (protégé)
router.put('/:id', auth, validateFormation, async (req, res) => {
  try {
    const { title, description, duration, price } = req.body;
    const formation = await Formation.findByIdAndUpdate(
      req.params.id,
      { title, description, duration, price },
      { new: true }
    );
    res.json(formation);
  } catch (err) {
    res.status(500).json({ message: 'Erreur modification formation' });
  }
});

// DELETE une formation (protégé)
router.delete('/:id', auth, async (req, res) => {
  try {
    await Formation.findByIdAndDelete(req.params.id);
    res.json({ message: 'Formation supprimée' });
  } catch (err) {
    res.status(500).json({ message: 'Erreur suppression formation' });
  }
});

module.exports = router;
