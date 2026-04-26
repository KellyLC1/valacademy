<template>
  <div class="admin-login">
    <h2>Connexion Admin</h2>
    <form @submit.prevent="login">
      <input v-model="username" type="text" placeholder="Identifiant" required />
      <input v-model="password" type="password" placeholder="Mot de passe" required />
      <button type="submit">Se connecter</button>
      <div v-if="error" class="error">{{ error }}</div>
    </form>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import axios from 'axios'
import { useRouter } from 'vue-router'

const username = ref('')
const password = ref('')
const error = ref('')
const router = useRouter()

async function login() {
  error.value = ''
  try {
    const res = await axios.post('http://localhost:5000/api/admin/login', {
      username: username.value,
      password: password.value
    })
    localStorage.setItem('adminToken', res.data.token)
    router.push('/admin')
  } catch (err) {
    error.value = err.response?.data?.message || 'Erreur serveur'
  }
}
</script>

<style scoped>
.admin-login {
  max-width: 350px;
  margin: 80px auto;
  padding: 32px;
  background: #fff;
  border-radius: 12px;
  box-shadow: 0 2px 12px rgba(0,0,0,0.07);
  display: flex;
  flex-direction: column;
  gap: 18px;
}
input {
  padding: 12px;
  border-radius: 8px;
  border: 1px solid #ccc;
  margin-bottom: 10px;
  font-size: 15px;
}
button {
  background: #9C8570;
  color: #fff;
  border: none;
  border-radius: 8px;
  padding: 12px;
  font-size: 16px;
  cursor: pointer;
}
.error {
  color: #c00;
  margin-top: 8px;
  font-size: 14px;
}
</style>
