<template>
  <section class="formations" id="formations">
    <div class="container">

      <h2>Nos formations les plus demandées</h2>
      <p class="section-sub">
        Découvrez nos espaces de formation modernes et accueillants à travers la France.
      </p>

      <div class="grid">

        <!-- Grande carte (2x2) -->
        <div class="img-item large">
          <img v-if="photos[0]" :src="photos[0].src" :alt="photos[0].alt" />
          <div v-else class="placeholder">
            <span class="ph-icon">📸</span>
            <span class="ph-text">Salle de formation principale</span>
          </div>
        </div>

        <!-- Petites cartes -->
        <div class="img-item" v-for="(photo, i) in smallPhotos" :key="i">
          <img v-if="photo.src" :src="photo.src" :alt="photo.alt" />
          <div v-else class="placeholder">
            <span class="ph-icon">{{ photo.icon }}</span>
            <span class="ph-text">{{ photo.label }}</span>
          </div>
        </div>

      </div>
      <div class="formations-btn-wrap">
        <a href="/formations" class="btn-primary">Voir toutes les formations</a>
      </div>
    </div>
  </section>
</template>

<script setup>
/**
 * Pour ajouter vos vraies photos, remplacez les objets ci-dessous
 * par : { src: '/images/photo1.jpg', alt: 'Description' }
 * Laissez src vide ('') pour afficher le placeholder.
 */
const photos = [
  { src: '', alt: 'Salle de formation principale' },
]

const smallPhotos = [
  { src: '', icon: '🍳', label: 'Atelier pratique' },
  { src: '', icon: '👥', label: 'Session en groupe' },
  { src: '', icon: '💻', label: 'Formation distanciel' },
  { src: '', icon: '📋', label: 'Remise des attestations' },
]
</script>

<style scoped>
.formations {
  background: white;
}

.formations h2 {
  font-size: 36px;
  color: var(--text);
}

.section-sub {
  font-size: 16px;
  color: var(--text-soft);
  max-width: 500px;
  margin: 12px 0 40px;
  line-height: 1.7;
}

.grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 16px;
}

.img-item {
  border-radius: var(--radius);
  overflow: hidden;
  background: var(--primary-pale);
  border: 1px solid var(--border);
}

.img-item.large {
  grid-column: span 2;
  grid-row: span 2;
}

.img-item img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}

.placeholder {
  width: 100%;
  aspect-ratio: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 8px;
  color: var(--text-soft);
}

.img-item.large .placeholder {
  aspect-ratio: unset;
  min-height: 280px;
}

.ph-icon {
  font-size: 28px;
  opacity: 0.5;
}

.ph-text {
  font-size: 12px;
  opacity: 0.7;
}

.formations-btn-wrap {
  display: flex;
  justify-content: center;
  margin-top: 38px;
}

.btn-primary {
  background: var(--primary);
  color: #fff;
  padding: 14px 32px;
  border-radius: 999px;
  font-size: 1.08rem;
  font-weight: 600;
  border: none;
  text-decoration: none;
  box-shadow: 0 2px 8px rgba(245,158,11,0.07);
  transition: background 0.18s, transform 0.18s;
  display: inline-block;
}

.btn-primary:hover {
  background: var(--primary-hover);
  transform: translateY(-2px) scale(1.03);
}
</style>
