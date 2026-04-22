<template>
  <section class="features" id="whyus">
    <div class="container">

      <h2>Pourquoi nous choisir ?</h2>
      <p class="section-sub">
        Une expertise de terrain, des formateurs reconnus et une approche pédagogique
        axée sur l'efficacité réelle.
      </p>

      <div class="grid">
        <div class="card" v-for="feat in features" :key="feat.title">
          <div class="icon-wrap">{{ feat.icon }}</div>
          <h3>{{ feat.title }}</h3>
          <p>{{ feat.desc }}</p>
        </div>
      </div>

    </div>
  </section>
</template>

<script setup>
const features = [
  {
    icon: '💰',
    title: 'Formation financée',
    desc: 'Nos formations sont éligibles au financement OPCO. Nous vous accompagnons dans toutes les démarches administratives.'
  },
  {
    icon: '👨‍🏫',
    title: 'Experts certifiés',
    desc: 'Des formateurs professionnels issus du terrain, reconnus pour leur expertise en hygiène alimentaire et HACCP.'
  },
  {
    icon: '🔄',
    title: 'Flexibilité totale',
    desc: 'Présentiel ou distanciel selon vos besoins. Nous nous adaptons à vos contraintes professionnelles.'
  },
  {
    icon: '📍',
    title: 'Présence nationale',
    desc: 'Des centres accessibles partout en France, proches de votre établissement pour faciliter l\'accès à la formation.'
  },
  {
    icon: '📈',
    title: 'Résultats prouvés',
    desc: 'Plus de 500 entreprises accompagnées avec succès vers la conformité HACCP et les meilleures pratiques hygiéniques.'
  },
  {
    icon: '🍽️',
    title: 'Mise en conformité',
    desc: 'Formations conçues pour répondre aux exigences réglementaires et aux contrôles sanitaires officiels.'
  },
]
</script>

<style scoped>
.features {
  background: var(--cream);
}

.features h2 {
  font-size: 36px;
  color: var(--text);
}

.section-sub {
  font-size: 16px;
  color: var(--text-soft);
  max-width: 600px;
  margin: 12px 0 48px;
  line-height: 1.7;
}

.grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 22px;
}

.card {
  background: white;
  border: 1px solid var(--border);
  border-radius: var(--radius-lg);
  padding: 28px;
  transition: transform 0.25s, box-shadow 0.25s;
}

.card:hover {
  transform: translateY(-4px);
  box-shadow: 0 10px 28px rgba(0, 0, 0, 0.06);
}

.icon-wrap {
  width: 44px;
  height: 44px;
  background: var(--primary-light);
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  margin-bottom: 16px;
}

.card h3 {
  font-family: var(--font-body);
  font-size: 15px;
  font-weight: 500;
  color: var(--text);
  margin-bottom: 8px;
}

.card p {
  font-size: 13px;
  color: var(--text-soft);
  line-height: 1.6;
}
</style>
