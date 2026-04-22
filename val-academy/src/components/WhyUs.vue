<template>
  <section class="certifs" id="certifs">
    <div class="container">

      <h2>Un centre certifié et reconnu</h2>
      <p class="section-sub">
        Notre expertise est validée par les organismes officiels et reconnue
        sur tout le territoire national.
      </p>

      <div class="grid">
        <div class="card" v-for="item in items" :key="item.title">
          <div class="emoji">{{ item.emoji }}</div>
          <h3>{{ item.title }}</h3>
          <p>{{ item.desc }}</p>
          <span class="badge">{{ item.badge }}</span>
        </div>
      </div>

    </div>
  </section>
</template>

<script setup>
const items = [
  {
    emoji: '📜',
    title: 'Certification Qualiopi',
    desc: 'Certification officielle garantissant la qualité de nos processus de formation professionnelle.',
    badge: 'Certifié Qualiopi'
  },
  {
    emoji: '🏛️',
    title: 'Ministère de l\'Agriculture',
    desc: 'Recensé et reconnu par le Ministère de l\'Agriculture — gage de sérieux et de conformité nationale.',
    badge: 'Reconnu officiellement'
  },
  {
    emoji: '🇫🇷',
    title: 'Présence nationale',
    desc: 'Nos centres couvrent l\'ensemble du territoire français pour être toujours proches de nos apprenants.',
    badge: 'Partout en France'
  },
  {
    emoji: '🍽️',
    title: 'Conformité HACCP',
    desc: 'Nos formations garantissent une mise en conformité totale avec les règles d\'hygiène alimentaire.',
    badge: 'Mise en conformité'
  },
  {
    emoji: '📍',
    title: 'Centres proches de vous',
    desc: 'Des centres implantés dans toutes les régions pour faciliter l\'accès à la formation sur site.',
    badge: 'Accessibilité maximale'
  },
]
</script>

<style scoped>
.certifs {
  background: white;
}

.certifs h2 {
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
  gap: 20px;
}

/* Dernière carte seule : centrée */
.grid .card:last-child:nth-child(3n - 1) {
  grid-column: 2;
}

.card {
  background: var(--primary-pale);
  border: 1px solid var(--border);
  border-radius: var(--radius-lg);
  padding: 28px 24px;
  text-align: center;
  transition: transform 0.25s, box-shadow 0.25s;
}

.card:hover {
  transform: translateY(-4px);
  box-shadow: 0 10px 28px rgba(245, 166, 35, 0.12);
}

.emoji {
  font-size: 36px;
  margin-bottom: 14px;
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
  line-height: 1.5;
  margin-bottom: 14px;
}

.badge {
  display: inline-block;
  background: var(--green-light);
  color: var(--green);
  padding: 4px 12px;
  border-radius: 999px;
  font-size: 11px;
  font-weight: 500;
}
</style>
