const { body, validationResult } = require('express-validator');

const validateLogin = [
  body('username').isString().trim().notEmpty().withMessage('Identifiant requis'),
  body('password').isString().notEmpty().withMessage('Mot de passe requis'),
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ message: 'Erreur de validation', errors: errors.array() });
    }
    next();
  }
];

const validateFormation = [
  body('title').isString().trim().notEmpty().withMessage('Titre requis'),
  body('description').optional().isString(),
  body('duration').optional().isString(),
  body('price').optional().isString(),
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ message: 'Erreur de validation', errors: errors.array() });
    }
    next();
  }
];

const validatePhoto = [
  body('url').isURL().withMessage('URL valide requise'),
  body('title').optional().isString(),
  body('formation').optional().isString(),
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ message: 'Erreur de validation', errors: errors.array() });
    }
    next();
  }
];

module.exports = { validateLogin, validateFormation, validatePhoto };
