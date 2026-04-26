const express = require('express');
const router = express.Router();
const Testimonial = require('../models/Testimonial');
const auth = require('../middleware/auth');
const { body, validationResult } = require('express-validator');
const crypto = require('crypto');
const nodemailer = require('nodemailer');

// GET tous les avis validés (public)
router.get('/', async (req, res) => {
  try {
    const testimonials = await Testimonial.find({ validated: true }).sort({ createdAt: -1 });
    res.json(testimonials);
  } catch (err) {
    res.status(500).json({ message: 'Erreur serveur' });
  }
});

// POST ajouter un avis via token d'invitation
router.post('/add',
  body('name').isString().trim().notEmpty(),
  body('text').isString().trim().notEmpty(),
  body('token').isString().notEmpty(),
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ message: 'Erreur de validation', errors: errors.array() });
    }
    const { name, text, token } = req.body;
    try {
      const testimonial = await Testimonial.findOne({ inviteToken: token, validated: false });
      if (!testimonial) return res.status(400).json({ message: 'Lien invalide ou déjà utilisé' });
      testimonial.name = name;
      testimonial.text = text;
      testimonial.validated = true;
      testimonial.inviteToken = undefined;
      await testimonial.save();
      res.json({ message: 'Avis ajouté, merci !' });
    } catch (err) {
      res.status(500).json({ message: 'Erreur serveur' });
    }
  }
);

// Fonction utilitaire pour envoyer un email d'invitation
envoyerInvitation = async (email, token) => {
  // À personnaliser selon votre domaine
  const lien = `https://<ton-domaine>/avis?token=${token}`;
  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: process.env.SMTP_PORT,
    secure: process.env.SMTP_SECURE === 'true',
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });
  await transporter.sendMail({
    from: process.env.SMTP_FROM || 'no-reply@valacademy.com',
    to: email,
    subject: "Votre invitation à donner un avis sur Val'Academy",
    html: `<p>Bonjour,<br><br>Vous êtes invité à donner votre avis sur Val'Academy.<br>
Cliquez sur le lien ci-dessous pour accéder au formulaire sécurisé :<br><a href="${lien}">${lien}</a><br><br>Merci !</p>`
  });
};

// POST générer une invitation (admin)
router.post('/invite', auth, body('email').isEmail(), async (req, res) => {
  const { email } = req.body;
  try {
    // Supprimer les invitations non validées existantes pour cet email
    await Testimonial.deleteMany({ email, validated: false });
    const token = crypto.randomBytes(24).toString('hex');
    await Testimonial.create({ email, inviteToken: token });
    // Envoi automatique de l'email d'invitation
    await envoyerInvitation(email, token);
    res.json({ message: 'Invitation générée et email envoyé', token });
  } catch (err) {
    console.error('Erreur invite testimonial:', err);
    res.status(500).json({ message: 'Erreur serveur', error: err.message });
  }
});

// GET récupérer un avis en attente via token (pour préremplir le formulaire)
router.get('/pending/:token', async (req, res) => {
  try {
    const testimonial = await Testimonial.findOne({ inviteToken: req.params.token, validated: false });
    if (!testimonial) return res.status(404).json({ message: 'Lien invalide ou expiré' });
    res.json({ email: testimonial.email });
  } catch (err) {
    res.status(500).json({ message: 'Erreur serveur' });
  }
});

// DELETE un avis (admin)
router.delete('/:id', auth, async (req, res) => {
  try {
    await Testimonial.findByIdAndDelete(req.params.id);
    res.json({ message: 'Avis supprimé' });
  } catch (err) {
    res.status(500).json({ message: 'Erreur suppression avis' });
  }
});

module.exports = router;
