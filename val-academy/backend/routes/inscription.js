const express = require('express');
const router = express.Router();
const Inscription = require('../models/Inscription');

// POST /api/inscription
router.post('/', async (req, res) => {
  try {
    const { name, email, phone, formation, city } = req.body;
    const newInscription = new Inscription({ name, email, phone, formation, city });
    await newInscription.save();
    res.status(201).json({ message: 'Inscription reçue !' });
  } catch (error) {
    res.status(500).json({ error: 'Erreur serveur' });
  }
});

module.exports = router;
