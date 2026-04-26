<template>
  <section class="testimonial-form-section">
    <div class="container">
      <h2>Laisser un avis</h2>
      <div v-if="success" class="success-msg">Merci pour votre avis !</div>
      <div v-else>
        <form @submit.prevent="submitTestimonial" class="testimonial-form">
          <input v-model="name" type="text" placeholder="Votre nom" required />
          <textarea v-model="text" placeholder="Votre avis..." required></textarea>
          <button type="submit">Envoyer mon avis</button>
        </form>
        <div v-if="error" class="error-msg">{{ error }}</div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import axios from 'axios';
import { useRoute } from 'vue-router';

const route = useRoute();
const token = ref(route.query.token || '');
const name = ref('');
const text = ref('');
const error = ref('');
const success = ref(false);

onMounted(async () => {
  if (!token.value) {
    error.value = 'Lien d’invitation invalide.';
    return;
  }
  try {
    await axios.get(`http://localhost:5000/api/testimonials/pending/${token.value}`);
  } catch {
    error.value = 'Lien d’invitation expiré ou déjà utilisé.';
  }
});

async function submitTestimonial() {
  error.value = '';
  try {
    await axios.post('http://localhost:5000/api/testimonials/add', {
      name: name.value,
      text: text.value,
      token: token.value
    });
    success.value = true;
  } catch (err) {
    error.value = err.response?.data?.message || 'Erreur lors de l’envoi.';
  }
}
</script>

<style scoped>
.testimonial-form-section {
  background: var(--cream);
  padding: 80px 0;
}
.container {
  max-width: 420px;
  margin: 0 auto;
  background: #fff;
  border-radius: 14px;
  box-shadow: 0 2px 12px rgba(31,41,55,0.07);
  padding: 38px 28px 32px 28px;
}
h2 {
  text-align: center;
  font-size: 2rem;
  color: var(--text);
  margin-bottom: 28px;
}
.testimonial-form {
  display: flex;
  flex-direction: column;
  gap: 18px;
}
input, textarea {
  padding: 12px 14px;
  border-radius: 8px;
  border: 1.5px solid #e0e0e0;
  font-size: 15px;
  background: #faf9f7;
}
button {
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
button:hover {
  background: #7c6a54;
}
.success-msg {
  color: #1a7f3c;
  background: #e6f9e6;
  border-radius: 8px;
  padding: 18px 14px;
  text-align: center;
  font-size: 1.1rem;
  margin-bottom: 18px;
}
.error-msg {
  color: #c00;
  margin-top: 12px;
  text-align: center;
}
</style>
