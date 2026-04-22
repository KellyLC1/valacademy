<template>
  <nav class="navbar">
    <div class="nav-inner">
      <a href="#" class="logo" aria-label="Accueil">
        <img src="/src/assets/Logo_Beige.813c71e4c4f17f8092c6.png" alt="Logo ValAcademy" class="logo-img" />
      </a>
      <button class="burger" @click="showMenu = !showMenu" aria-label="Menu" v-if="isMobile">
        <span :class="{'open': showMenu}"></span>
        <span :class="{'open': showMenu}"></span>
        <span :class="{'open': showMenu}"></span>
      </button>
      <ul class="nav-links" :class="{ open: showMenu || !isMobile }">
        <li><a href="#haccp">HACCP</a></li>
        <li><a href="#whyus">Pourquoi nous</a></li>
        <li><a href="#certifs">Certifications</a></li>
        <li><a href="#temoignages">Avis</a></li>
        <li><a href="#formations">Formations</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
      <a href="#inscription" class="nav-cta">S'inscrire</a>
    </div>
  </nav>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
const showMenu = ref(false)
const isMobile = ref(false)

function handleResize() {
  isMobile.value = window.innerWidth <= 900
  if (!isMobile.value) showMenu.value = false
}
onMounted(() => {
  handleResize()
  window.addEventListener('resize', handleResize)
})
onUnmounted(() => {
  window.removeEventListener('resize', handleResize)
})
</script>

<style scoped>
.navbar {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;
  background: rgba(255, 253, 248, 0.92);
  backdrop-filter: blur(12px);
  border-bottom: 1px solid rgba(245, 166, 35, 0.15);
  padding: 0 2%;
}

.nav-inner {
  /* max-width: 1100px; */
  margin: auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 80px;
}

.logo {
  display: flex;
  align-items: center;
  text-decoration: none;
  height: 40px;
}

.logo-img {
  height: 80px;
  width: auto;
  display: block;
}

.burger {
  display: none;
  flex-direction: column;
  gap: 4px;
  background: none;
  border: none;
  cursor: pointer;
  padding: 8px;
}
.burger span {
  display: block;
  width: 26px;
  height: 3px;
  background: var(--text-mid);
  border-radius: 2px;
  transition: 0.3s;
}
.burger span.open:nth-child(1) {
  transform: translateY(7px) rotate(45deg);
}
.burger span.open:nth-child(2) {
  opacity: 0;
}
.burger span.open:nth-child(3) {
  transform: translateY(-7px) rotate(-45deg);
}

.nav-links {
  display: flex;
  gap: 28px;
  list-style: none;
}

.nav-links a {
  font-size: 14px;
  color: var(--text-mid);
  text-decoration: none;
  font-weight: 400;
  transition: color 0.2s;
}

.nav-links a:hover {
  color: var(--primary-hover);
}

.nav-cta {
  background: var(--primary);
  color: white;
  padding: 10px 22px;
  border-radius: 999px;
  font-size: 14px;
  font-weight: 500;
  text-decoration: none;
  transition: background 0.2s, transform 0.2s;
}

.nav-cta:hover {
  background: var(--primary-hover);
  transform: scale(1.03);
}

@media (max-width: 900px) {
  .burger {
    display: flex;
  }
  .nav-links {
    position: absolute;
    top: 64px;
    left: 0;
    right: 0;
    background: rgba(255,253,248,0.98);
    flex-direction: column;
    gap: 0;
    padding: 0;
    border-bottom: 1px solid #f5a62322;
    display: none;
  }
  .nav-links.open {
    display: flex;
  }
  .nav-links li {
    border-bottom: 1px solid #f5a62322;
    text-align: center;
    padding: 18px 0;
  }
  .nav-cta {
    display: none;
  }
}
</style>
