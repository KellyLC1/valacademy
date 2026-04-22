<template>
  <section class="haccp" id="haccp">
    <div class="container">

      <h2>Centre spécialisé HACCP</h2>
      <p class="section-sub">
        VAL Academy est la référence nationale en formations hygiène alimentaire HACCP,
        essentielles pour garantir la conformité et la sécurité alimentaire en entreprise.
      </p>

      <div class="grid">
        <div class="card">
          <div class="icon">🔬</div>
          <h3>Hygiène alimentaire</h3>
          <p>Maîtrise des principes fondamentaux de l'hygiène en restauration et industrie alimentaire.</p>
        </div>
        <div class="card">
          <div class="icon">📋</div>
          <h3>Normes HACCP</h3>
          <p>Application rigoureuse de la méthode HACCP pour identifier et contrôler les dangers.</p>
        </div>
        <div class="card">
          <div class="icon">✅</div>
          <h3>Conformité sanitaire</h3>
          <p>Mise en conformité totale avec la réglementation européenne et française en vigueur.</p>
        </div>
        <div class="card">
          <div class="icon">🛡️</div>
          <h3>Sécurité alimentaire</h3>
          <p>Protégez vos clients, votre équipe et votre établissement contre tout risque sanitaire.</p>
        </div>
      </div>

      <div class="tags">
        <span>Hygiène alimentaire</span>
        <span>Normes HACCP</span>
        <span>Conformité sanitaire</span>
        <span>Sécurité alimentaire</span>
        <span>Restauration commerciale</span>
        <span>Industrie agroalimentaire</span>
      </div>

    </div>
  </section>
</template>

<style scoped>
.haccp {
  background: white;
  text-align: center;
}

.haccp h2 {
  font-size: 36px;
  color: var(--text);
}

.section-sub {
  font-size: 16px;
  color: var(--text-soft);
  max-width: 640px;
  margin: 14px auto 48px;
  line-height: 1.7;
}

.grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
  margin-bottom: 40px;
}

.card {
  background: var(--primary-pale);
  border: 1px solid var(--border);
  border-radius: var(--radius-lg);
  padding: 28px 20px;
  transition: transform 0.25s, box-shadow 0.25s;
}

.card:hover {
  transform: translateY(-5px);
  box-shadow: 0 12px 32px rgba(245, 166, 35, 0.15);
}

.icon {
  font-size: 32px;
  margin-bottom: 14px;
}

.card h3 {
  font-family: var(--font-body);
  font-size: 14px;
  font-weight: 500;
  color: var(--text);
  margin-bottom: 8px;
}

.card p {
  font-size: 13px;
  color: var(--text-soft);
  line-height: 1.6;
}

.tags {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 10px;
}

.tags span {
  background: var(--primary-light);
  color: #7A4A00;
  padding: 9px 18px;
  border-radius: 999px;
  font-size: 13px;
  font-weight: 500;
}
</style>
