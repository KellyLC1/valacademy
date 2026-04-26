<template>
  <section class="forms-section">
    <div class="container">

      <h2>Inscrivez-vous ou contactez-nous</h2>
      <p class="section-sub">
        Un projet de formation ? Remplissez le formulaire adapté à votre besoin.
        Notre équipe vous répond sous 24h.
      </p>

      <div class="forms-grid">

        <!-- Formulaire inscription -->
        <div class="form-card" id="inscription">
          <div class="form-header">
            <div class="form-icon">🎓</div>
            <div>
              <div class="form-title">S'inscrire à une formation</div>
              <div class="form-desc">Choisissez votre formation HACCP et réservez votre place.</div>
            </div>
          </div>

          <form @submit.prevent="handleInscription">
            <input v-model="inscription.name"      type="text"  placeholder="Nom complet *"       required />
            <input v-model="inscription.email"     type="email" placeholder="Adresse email *"     required />
            <input v-model="inscription.phone"     type="tel"   placeholder="Téléphone *"         required />
            <select v-model="inscription.formation" required>
              <option value="" disabled>Choisir une formation...</option>
              <option>Formation HACCP — Restauration commerciale (14h)</option>
              <option>Formation HACCP — Industrie agroalimentaire (21h)</option>
              <option>Remise à niveau hygiène alimentaire (7h)</option>
              <option>Formation responsable HACCP (35h)</option>
            </select>
            <input v-model="inscription.city" type="text" placeholder="Ville / département" />
            <button type="submit" :disabled="sentInscription">
              {{ sentInscription ? '✓ Inscription envoyée !' : 'Valider mon inscription →' }}
            </button>
            <transition name="fade">
              <div v-if="sentInscription" class="form-success">
                Merci pour votre inscription ! Nous vous recontacterons sous 24h.
              </div>
            </transition>
          </form>
        </div>

        <!-- Formulaire contact -->
        <div class="form-card" id="contact">
          <div class="form-header">
            <div class="form-icon">💬</div>
            <div>
              <div class="form-title">Nous contacter</div>
              <div class="form-desc">Une question, un devis ou une demande de rappel ?</div>
            </div>
          </div>

          <form @submit.prevent="handleContact">
            <input v-model="contact.name"    type="text"  placeholder="Nom complet *"   required />
            <input v-model="contact.email"   type="email" placeholder="Adresse email *" required />
            <input v-model="contact.phone"   type="tel"   placeholder="Téléphone" />
            <textarea v-model="contact.message" placeholder="Votre message..." required></textarea>
            <button type="submit" :disabled="sentContact">
              {{ sentContact ? '✓ Message envoyé !' : 'Envoyer le message →' }}
            </button>
            <transition name="fade">
              <div v-if="sentContact" class="form-success">
                Merci pour votre message ! Nous vous répondrons rapidement.
              </div>
            </transition>
          </form>
        </div>

      </div>
    </div>
  </section>
</template>

<script setup>
import { reactive, ref } from 'vue'
import axios from 'axios'

const inscription = reactive({ name: '', email: '', phone: '', formation: '', city: '' })
const sentInscription = ref(false)

async function handleInscription() {
  try {
    await axios.post('http://localhost:5000/api/inscription', {
      name: inscription.name,
      email: inscription.email,
      phone: inscription.phone,
      formation: inscription.formation,
      city: inscription.city
    })
    sentInscription.value = true
    setTimeout(() => {
      sentInscription.value = false
      Object.assign(inscription, { name: '', email: '', phone: '', formation: '', city: '' })
    }, 4000)
  } catch (error) {
    alert('Erreur lors de l\'inscription. Merci de réessayer.')
  }
}

const contact = reactive({ name: '', email: '', phone: '', message: '' })
const sentContact = ref(false)

async function handleContact() {
  try {
    await axios.post('http://localhost:5000/api/contact', {
      name: contact.name,
      email: contact.email,
      message: contact.message
    })
    sentContact.value = true
    setTimeout(() => {
      sentContact.value = false
      Object.assign(contact, { name: '', email: '', phone: '', message: '' })
    }, 4000)
  } catch (error) {
    alert('Erreur lors de l\'envoi du message. Merci de réessayer.')
  }
}
</script>

<style scoped>
.forms-section {
  background: var(--cream);
  scroll-margin-top: 80px;
}

.forms-section h2 {
  font-size: 36px;
  color: var(--text);
}

.section-sub {
  font-size: 16px;
  color: var(--text-soft);
  max-width: 560px;
  margin: 12px 0 48px;
  line-height: 1.7;
}

.forms-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 28px;
}

.form-card {
  background: white;
  border: 1px solid var(--border);
  border-radius: var(--radius-lg);
  padding: 36px;
  display: flex;
  flex-direction: column;
  height: 100%;
}

.form-header {
  display: flex;
  align-items: flex-start;
  gap: 14px;
  margin-bottom: 28px;
}

.form-icon {
  font-size: 28px;
  line-height: 1;
  margin-top: 2px;
}

.form-title {
  font-family: var(--font-display);
  font-size: 20px;
  color: var(--text);
  margin-bottom: 4px;
}

.form-desc {
  font-size: 13px;
  color: var(--text-soft);
  line-height: 1.5;
}

form {
  display: flex;
  flex-direction: column;
  flex: 1;
  gap: 14px;
}

input,
select,
textarea {
  padding: 13px 16px;
  border: 1.5px solid rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  font-family: var(--font-body);
  font-size: 14px;
  color: var(--text);
  background: white;
  outline: none;
  transition: border-color 0.2s;
  width: 100%;
}

input:focus,
select:focus,
textarea:focus {
  border-color: var(--primary);
}

select {
  appearance: none;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='8' viewBox='0 0 12 8'%3E%3Cpath d='M1 1l5 5 5-5' stroke='%239C8570' stroke-width='1.5' fill='none' stroke-linecap='round'/%3E%3C/svg%3E");
  background-repeat: no-repeat;
  background-position: right 16px center;
  cursor: pointer;
}

textarea {
  min-height: 130px;
  resize: vertical;
}

button {
  background: var(--primary);
  color: white;
  padding: 14px;
  border-radius: 999px;
  font-size: 15px;
  font-weight: 500;
  border: none;
  cursor: pointer;
  transition: background 0.2s, transform 0.2s;
  font-family: var(--font-body);
  margin-top: auto;
}

button:hover:not(:disabled) {
  background: var(--primary-hover);
  transform: scale(1.02);
}

button:disabled {
  background: var(--green);
  cursor: default;
}

.form-success {
  margin-top: 18px;
  margin-bottom: 0;
  background: #e6f9e6;
  color: #1a7f3c;
  border-radius: 8px;
  padding: 14px 18px;
  font-size: 1.08rem;
  text-align: center;
  box-shadow: 0 2px 8px rgba(34,197,94,0.07);
  border: 1px solid #b6e7c9;
}
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.4s;
}
.fade-enter-from, .fade-leave-to {
  opacity: 0;
}
</style>
