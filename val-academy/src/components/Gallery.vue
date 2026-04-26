<template>
  <section class="gallery-section">
    <div class="container">
      <h2>Galerie</h2>
      <p class="section-sub">Découvrez nos formations et nos centres en images</p>
      <div class="masonry-gallery">
        <div class="masonry-item" v-for="img in images" :key="img._id">
          <img :src="img.url" :alt="img.title" />
          <div class="caption">{{ img.title }}</div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import axios from 'axios';

const images = ref([]);

async function fetchGallery() {
  try {
    const res = await axios.get('http://localhost:5000/api/gallery');
    images.value = res.data;
  } catch (err) {
    images.value = [];
  }
}
onMounted(fetchGallery);
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
.masonry-gallery {
  column-count: 3;
  column-gap: 24px;
  max-width: 1200px;
  margin: 0 auto;
}
.masonry-item {
  background: var(--card);
  border-radius: var(--radius);
  box-shadow: 0 2px 12px rgba(31,41,55,0.06);
  margin-bottom: 24px;
  display: inline-block;
  width: 100%;
  transition: transform 0.18s, box-shadow 0.18s;
  overflow: hidden;
}
.masonry-item img {
  width: 100%;
  display: block;
  border-radius: var(--radius) var(--radius) 0 0;
  object-fit: cover;
  transition: transform 0.2s;
}
.masonry-item:hover img {
  transform: scale(1.06);
}
.caption {
  padding: 14px 10px 10px;
  color: var(--text);
  font-size: 1rem;
  text-align: center;
}
@media (max-width: 900px) {
  .masonry-gallery {
    column-count: 2;
  }
}
@media (max-width: 600px) {
  .masonry-gallery {
    column-count: 1;
  }
}
</style>
