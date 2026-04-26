<template>
  <section class="formations" id="formations">
    <div class="container">
      <h2>Nos formations les plus demandées</h2>
      <div class="formations-slider-wrap">
        <button class="arrow left" @click="prevSlide" :disabled="currentIndex === 0">&#8592;</button>
        <div class="formations-cards">
          <div
            v-for="(formation, i) in visibleFormations"
            :key="formation._id"
            class="formation-card"
            :style="{ backgroundImage: `url('${formation.image || '/src/assets/hero.png'}')` }"
            @mouseenter="hovered = formation._id"
            @mouseleave="hovered = null"
            :class="{ expanded: hovered === formation._id }"
          >
            <transition name="fade-slide">
              <div v-if="hovered === formation._id" class="overlay">
                <div class="formation-title">{{ formation.title }}</div>
                <button class="cta" @click="openModal(formation)">En savoir plus</button>
              </div>
            </transition>
          </div>
        </div>
        <button class="arrow right" @click="nextSlide" :disabled="currentIndex + maxVisible >= formations.length">&#8594;</button>
      </div>
      <div v-if="modalFormation" class="modal-bg" @click.self="closeModal">
        <div class="modal-content">
          <h3>{{ modalFormation.title }}</h3>
          <div class="modal-img" v-if="modalFormation.image">
            <img :src="modalFormation.image" :alt="modalFormation.title" />
          </div>
          <p>{{ modalFormation.description }}</p>
          <div v-if="modalFormation.duration">Durée : {{ modalFormation.duration }}</div>
          <div v-if="modalFormation.price">Prix : {{ modalFormation.price }}</div>
          <button class="close-btn" @click="closeModal">Fermer</button>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue';
import axios from 'axios';

const formations = ref([]);
const hovered = ref(null);
const modalFormation = ref(null);
const maxVisible = 5;
const currentIndex = ref(0);

async function fetchFormations() {
  try {
    const res = await axios.get('http://localhost:5000/api/formation');
    formations.value = res.data;
  } catch (err) {
    formations.value = [];
  }
}
const visibleFormations = computed(() =>
  formations.value.slice(currentIndex.value, currentIndex.value + maxVisible)
);
function nextSlide() {
  if (currentIndex.value + maxVisible < formations.value.length) {
    currentIndex.value++;
  }
}
function prevSlide() {
  if (currentIndex.value > 0) {
    currentIndex.value--;
  }
}
function openModal(formation) {
  modalFormation.value = formation;
}
function closeModal() {
  modalFormation.value = null;
}
onMounted(fetchFormations);
</script>

<style scoped>
.formations {
  background: white;
  padding-bottom: 60px;
}
.formations h2 {
  font-size: 36px;
  color: var(--text);
  margin-bottom: 38px;
  text-align: center;
}
.formations-slider-wrap {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
}
.arrow {
  background: #9C8570;
  color: #fff;
  border: none;
  border-radius: 50%;
  width: 44px;
  height: 44px;
  font-size: 1.7rem;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: background 0.2s;
}
.arrow:disabled {
  background: #e0e0e0;
  color: #aaa;
  cursor: default;
}
.formations-cards {
  display: flex;
  gap: 28px;
  justify-content: center;
  flex-wrap: nowrap;
  overflow: hidden;
  min-width: 0;
}
.formation-card {
  width: 200px;
  height: 320px;
  border-radius: 18px;
  background-size: cover;
  background-position: center;
  box-shadow: 0 2px 12px rgba(31,41,55,0.09);
  position: relative;
  overflow: hidden;
  transition: width 0.35s cubic-bezier(.4,2,.6,1), box-shadow 0.2s;
  cursor: pointer;
  display: flex;
  align-items: flex-end;
  justify-content: center;
}
.formation-card.expanded {
  width: 350px;
  box-shadow: 0 8px 32px rgba(31,41,55,0.18);
}
.overlay {
  position: absolute;
  top: 0; left: 0; right: 0; bottom: 0;
  background: linear-gradient(180deg,rgba(0,0,0,0.18) 40%,rgba(0,0,0,0.55) 100%);
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-start;
  padding: 32px 24px 24px 24px;
  opacity: 1;
  transition: opacity 0.2s;
}
.formation-title {
  color: #fff;
  font-size: 1.3rem;
  font-weight: 700;
  margin-bottom: 18px;
  text-shadow: 0 2px 8px rgba(0,0,0,0.18);
}
.cta {
  background: #9C8570;
  color: #fff;
  border: none;
  border-radius: 8px;
  padding: 12px 22px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: background 0.2s;
}
.cta:hover {
  background: #7c6a54;
}
.fade-slide-enter-active, .fade-slide-leave-active {
  transition: opacity 0.3s, transform 0.3s;
}
.fade-slide-enter-from, .fade-slide-leave-to {
  opacity: 0;
  transform: translateY(30px);
}
.modal-bg {
  position: fixed;
  top: 0; left: 0; right: 0; bottom: 0;
  background: rgba(0,0,0,0.25);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
}
.modal-content {
  background: #fff;
  border-radius: 16px;
  padding: 38px 32px 28px 32px;
  min-width: 320px;
  max-width: 95vw;
  box-shadow: 0 8px 32px rgba(31,41,55,0.18);
  text-align: center;
  position: relative;
}
.modal-img img {
  max-width: 320px;
  border-radius: 12px;
  margin-bottom: 18px;
}
.close-btn {
  background: #bbb;
  color: #fff;
  border: none;
  border-radius: 8px;
  padding: 10px 18px;
  font-size: 15px;
  cursor: pointer;
  margin-top: 18px;
  transition: background 0.2s;
}
.close-btn:hover {
  background: #888;
}
@media (max-width: 900px) {
  .formations-slider-wrap {
    flex-direction: column;
    gap: 0;
  }
  .formations-cards {
    flex-direction: column;
    align-items: center;
    gap: 18px;
  }
  .formation-card, .formation-card.expanded {
    width: 95vw;
    max-width: 350px;
  }
}
</style>
