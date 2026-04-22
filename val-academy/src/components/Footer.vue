<template>
  <footer>
    <div class="footer-inner">

      <div class="footer-grid">

        <div class="footer-brand-col">
          <div class="brand">Val<span>Academy</span> Formations</div>
          <p class="brand-desc">
            Centre spécialisé en formations HACCP et hygiène alimentaire,
            certifié Qualiopi et reconnu par le Ministère de l'Agriculture.
            Présent sur toute la France.
          </p>
          <div class="trust-badges">
            <span class="trust-badge">📜 Qualiopi</span>
            <span class="trust-badge">🏛️ Ministère Agriculture</span>
            <span class="trust-badge">🇫🇷 France entière</span>
          </div>
        </div>

        <div class="footer-col">
          <h4>Formations</h4>
          <ul>
            <li>HACCP Restauration (14h)</li>
            <li>HACCP Industrie (21h)</li>
            <li>Responsable HACCP (35h)</li>
            <li>Remise à niveau (7h)</li>
          </ul>
        </div>

        <div class="footer-col">
          <h4>Informations</h4>
          <ul>
            <li>Financement OPCO</li>
            <li>Certification Qualiopi</li>
            <li>Nos centres</li>
            <li>Mentions légales</li>
          </ul>
        </div>

        <div class="footer-col">
          <h4>Contact</h4>
          <ul>
            <li>06 12 34 56 78</li>
            <li>Lun – Ven : 9h – 18h</li>
            <li><a href="#contact">Formulaire de contact</a></li>
            <li><a href="#inscription">S'inscrire</a></li>
          </ul>
        </div>

      </div>

      <div class="footer-bottom">
        <span>© {{ year }} VAL Academy Formation — Tous droits réservés</span>
        <span class="qualiopi-mention">✦ Certifié Qualiopi · Reconnu Ministère de l'Agriculture</span>
      </div>

    </div>
  </footer>
</template>

<script setup>
const year = new Date().getFullYear()
</script>

<style scoped>
footer {
  background: #1C1410;
  color: rgba(255, 255, 255, 0.65);
  padding: 56px 5% 32px;
}

.footer-inner {
  max-width: 1100px;
  margin: auto;
}

.footer-grid {
  display: grid;
  grid-template-columns: 2fr 1fr 1fr 1fr;
  gap: 48px;
  margin-bottom: 40px;
}

/* Colonne marque */
.brand {
  font-family: var(--font-display);
  font-size: 20px;
  color: white;
  margin-bottom: 12px;
}

.brand span {
  color: var(--primary);
}

.brand-desc {
  font-size: 13px;
  line-height: 1.7;
  margin-bottom: 20px;
}

.trust-badges {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}

.trust-badge {
  background: rgba(245, 166, 35, 0.15);
  color: var(--primary);
  padding: 5px 12px;
  border-radius: 999px;
  font-size: 11px;
  font-weight: 500;
}

/* Colonnes liens */
.footer-col h4 {
  font-size: 11px;
  font-weight: 500;
  color: white;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  margin-bottom: 16px;
}

.footer-col ul {
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 9px;
}

.footer-col ul li {
  font-size: 13px;
}

.footer-col ul li a {
  color: rgba(255, 255, 255, 0.65);
  text-decoration: none;
  transition: color 0.2s;
}

.footer-col ul li a:hover {
  color: var(--primary);
}

/* Bas de footer */
.footer-bottom {
  border-top: 1px solid rgba(255, 255, 255, 0.08);
  padding-top: 24px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 12px;
  flex-wrap: wrap;
  gap: 10px;
}

.qualiopi-mention {
  background: rgba(245, 166, 35, 0.12);
  color: var(--primary);
  padding: 6px 14px;
  border-radius: 999px;
  font-size: 12px;
  font-weight: 500;
}
</style>
