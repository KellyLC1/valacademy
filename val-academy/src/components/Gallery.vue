<template>
  <section class="gallery-section">
    <div class="container">
      <h2>Galerie</h2>
      <p class="section-sub">Découvrez nos formations et nos centres en images</p>
      <div class="gallery-grid">
        <div class="gallery-card" v-for="(img, i) in images" :key="i">
          <img :src="img.src" :alt="img.alt" />
          <div class="caption">{{ img.alt }}</div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const images = [
  { src: '/src/assets/hero.png', alt: 'Salle de formation moderne' },
  { src: '/src/assets/vite.svg', alt: 'Session HACCP en cours' },
  { src: '/src/assets/vue.svg', alt: 'Formateur certifié à l’œuvre' },
  // Ajoutez d'autres images ici
]
</script>

<style scoped>
.gallery-section {
  background: var(--cream);
  padding: 90px 20px;
}
.gallery-section h2 {
  text-align: center;
  font-size: 2.2rem;
  color: var(--text);
}
.section-sub {
  text-align: center;
  color: var(--muted);
  margin-bottom: 40px;
}
.gallery-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: 24px;
}
.gallery-card {
  background: var(--card);
  border-radius: var(--radius);
  box-shadow: 0 2px 12px rgba(31,41,55,0.06);
  overflow: hidden;
  transition: transform 0.18s, box-shadow 0.18s;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.gallery-card:hover {
  transform: translateY(-6px) scale(1.03);
  box-shadow: 0 6px 24px rgba(245,158,11,0.13);
}
.gallery-card img {
  width: 100%;
  height: 180px;
  object-fit: cover;
  display: block;
}
.caption {
  padding: 14px 10px 10px;
  color: var(--text);
  font-size: 1rem;
  text-align: center;
}
</style>
