const rateLimit = require('express-rate-limit');

// Limite à 5 tentatives de login par 15 minutes par IP
const loginLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 5,
  message: {
    message: 'Trop de tentatives de connexion, réessayez plus tard.'
  },
  standardHeaders: true,
  legacyHeaders: false,
});

module.exports = loginLimiter;
