<template>
  <section class="hero">
    <div class="hero-inner container">

      <div class="hero-content">
        <div class="badge">✦ Centre de formation agréé</div>

        <h1>
          VAL<em>ACADEMY</em><br />
          Formations<br />
          <!-- <span>HACCP</span> -->
        </h1>

        <p class="subtitle">
          Formations professionnelles, finançables par votre OPCO,
          dispensées par des experts certifiés partout en France.
        </p>

        <div class="highlights">
          <div class="chip"><span class="ok">✓</span> Certification Qualiopi</div>
          <div class="chip"><span class="ok">✓</span> Ministère de l'Agriculture</div>
          <div class="chip"><span class="ok">✓</span> Présence nationale</div>
          <div class="chip"><span class="ok">✓</span> Centres proches de vous</div>
        </div>

        <div class="actions">
          <a href="#formations" class="btn-primary">Découvrez nos formations</a>
          <a href="#contact" class="btn-secondary">Être rappelé</a>
        </div>
      </div>

      <div class="hero-visual">
        <div class="visual-card main-card">
          <div class="card-icon">🍽️</div>
          <div class="card-title">Centre spécialisé HACCP</div>
          <div class="card-desc">
            Mise en conformité selon les règles d'hygiène alimentaire pour les
            professionnels de la restauration et de l'agroalimentaire.
          </div>
        </div>
        <div class="stats-row">
          <div class="visual-card stat-card">
            <div class="stat-num">500+</div>
            <div class="stat-label">Entreprises accompagnées</div>
          </div>
          <div class="visual-card stat-card">
            <div class="stat-num">95%</div>
            <div class="stat-label">Taux de satisfaction</div>
          </div>
          <div class="visual-card stat-card">
            <div class="stat-num">100%</div>
            <div class="stat-label">Financement OPCO</div>
          </div>
        </div>
      </div>

    </div>
  </section>
</template>

<style scoped>
.hero {
  padding-top: 140px;
  padding-bottom: 80px;
  padding-left: 5%;
  padding-right: 5%;
  background: var(--cream);
  position: relative;
  overflow: hidden;
}

.hero::before {
  content: '';
  position: absolute;
  top: -80px;
  right: -120px;
  width: 500px;
  height: 500px;
  background: radial-gradient(circle, rgba(245, 166, 35, 0.12) 0%, transparent 70%);
  border-radius: 50%;
  pointer-events: none;
}

.hero::after {
  content: '';
  position: absolute;
  bottom: -60px;
  left: -80px;
  width: 350px;
  height: 350px;
  background: radial-gradient(circle, rgba(245, 166, 35, 0.08) 0%, transparent 70%);
  border-radius: 50%;
  pointer-events: none;
}

.hero-inner {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 60px;
  align-items: center;
}

/* Badge */
.badge {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  background: var(--primary-light);
  color: #7A4A00;
  padding: 8px 16px;
  border-radius: 999px;
  font-size: 13px;
  font-weight: 500;
  margin-bottom: 24px;
}

/* Titre */
h1 {
  font-size: 52px;
  font-weight: 600;
  line-height: 1.1;
  color: var(--text);
  margin-bottom: 20px;
}

h1 em {
  color: var(--primary);
  font-style: normal;
}

/* h1 span {
  color: var(--primary);
} */

/* Sous-titre */
.subtitle {
  font-size: 17px;
  color: var(--text-mid);
  line-height: 1.7;
  margin-bottom: 32px;
  max-width: 480px;
}

/* Chips */
.highlights {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-bottom: 36px;
}

.chip {
  background: white;
  border: 1px solid var(--border);
  color: var(--text-mid);
  padding: 7px 14px;
  border-radius: 999px;
  font-size: 13px;
  display: flex;
  align-items: center;
  gap: 6px;
}

.ok {
  color: var(--green);
  font-weight: 600;
  font-size: 12px;
}

/* Boutons */
.actions {
  display: flex;
  gap: 14px;
  flex-wrap: wrap;
}

.btn-primary {
  background: var(--primary);
  color: white;
  padding: 14px 28px;
  border-radius: 999px;
  font-size: 15px;
  font-weight: 500;
  text-decoration: none;
  transition: 0.2s;
}

.btn-primary:hover {
  background: var(--primary-hover);
  transform: scale(1.03);
}

.btn-secondary {
  background: white;
  color: var(--text);
  padding: 14px 28px;
  border-radius: 999px;
  font-size: 15px;
  font-weight: 400;
  text-decoration: none;
  border: 1.5px solid rgba(245, 166, 35, 0.4);
  transition: 0.2s;
}

.btn-secondary:hover {
  border-color: var(--primary);
  transform: scale(1.02);
}

/* Visuel droite */
.hero-visual {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.visual-card {
  background: white;
  border-radius: var(--radius-lg);
  padding: 22px 26px;
  border: 1px solid var(--border);
  box-shadow: 0 4px 24px rgba(245, 166, 35, 0.08);
}

.card-icon {
  font-size: 28px;
  margin-bottom: 10px;
}

.card-title {
  font-size: 15px;
  font-weight: 500;
  color: var(--text);
  margin-bottom: 5px;
}

.card-desc {
  font-size: 13px;
  color: var(--text-soft);
  line-height: 1.5;
}

.stats-row {
  display: flex;
  gap: 16px;
}

.stat-card {
  flex: 1;
  text-align: center;
}

.stat-num {
  font-family: 'Playfair Display', serif;
  font-size: 32px;
  color: var(--primary-hover);
  font-weight: 600;
}

.stat-label {
  font-size: 12px;
  color: var(--text-soft);
  margin-top: 2px;
}
</style>