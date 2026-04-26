<template>
  <div class="admin-dashboard">
    <header class="admin-header">
      <h2>Tableau de bord <span>Admin</span></h2>
      <button @click="logout" class="logout">Déconnexion</button>
    </header>

    <div class="dashboard-grid">
      <section class="dashboard-card">
        <h3>Galerie photos</h3>
        <form @submit.prevent="addPhoto" class="add-form">
          <input v-model="newPhoto.url" type="text" placeholder="URL de l'image" required />
          <input v-model="newPhoto.title" type="text" placeholder="Titre" />
          <input v-model="newPhoto.formation" type="text" placeholder="Formation liée" />
          <button type="submit">Ajouter</button>
        </form>
        <div v-if="photoError" class="error">{{ photoError }}</div>
        <ul class="gallery-list">
          <li v-for="photo in gallery" :key="photo._id">
            <div class="img-wrapper">
              <img :src="photo.url" :alt="photo.title" />
            </div>
            <div class="photo-info">
              <div class="photo-title">{{ photo.title }}</div>
              <div class="photo-formation" v-if="photo.formation">({{ photo.formation }})</div>
            </div>
            <button class="delete-btn" @click="deletePhoto(photo._id)"><span>🗑️</span></button>
          </li>
        </ul>
      </section>

      <section class="dashboard-card">
        <h3>Formations</h3>
        <form @submit.prevent="addFormation" class="add-form">
          <input v-model="newFormation.title" type="text" placeholder="Titre de la formation" required />
          <input v-model="newFormation.description" type="text" placeholder="Description" />
          <input v-model="newFormation.duration" type="text" placeholder="Durée" />
          <input v-model="newFormation.price" type="text" placeholder="Prix" />
          <input v-model="newFormation.image" type="text" placeholder="URL de l'image" />
          <button type="submit">Ajouter</button>
        </form>
        <div v-if="formationError" class="error">{{ formationError }}</div>
        <ul class="formation-list">
          <li v-for="formation in formations" :key="formation._id">
            <div class="formation-main">
              <div>
                <strong>{{ formation.title }}</strong>
                <span v-if="formation.duration" class="formation-duration">({{ formation.duration }})</span>
              </div>
              <div class="formation-actions">
                <button class="edit-btn" @click="editFormation(formation)"><span>✏️</span></button>
                <button class="delete-btn" @click="deleteFormation(formation._id)"><span>🗑️</span></button>
              </div>
            </div>
            <div class="formation-desc">{{ formation.description }}</div>
            <div v-if="formation.price" class="formation-price">Prix : {{ formation.price }}</div>
          </li>
        </ul>
        <div v-if="editMode" class="edit-modal">
          <div class="edit-modal-content">
            <h4>Modifier la formation</h4>
            <form @submit.prevent="updateFormation" class="add-form">
              <input v-model="editFormationData.title" type="text" placeholder="Titre" required />
              <input v-model="editFormationData.description" type="text" placeholder="Description" />
              <input v-model="editFormationData.duration" type="text" placeholder="Durée" />
              <input v-model="editFormationData.price" type="text" placeholder="Prix" />
              <input v-model="editFormationData.image" type="text" placeholder="URL de l'image" />
              <button type="submit">Enregistrer</button>
              <button type="button" @click="cancelEdit" class="cancel-btn">Annuler</button>
            </form>
          </div>
        </div>
      </section>

      <section>
        <h3>Inviter un client à donner son avis</h3>
        <form @submit.prevent="inviteTestimonial" class="add-form">
          <input v-model="inviteEmail" type="email" placeholder="Email du client" required />
          <button type="submit">Générer le lien d'invitation</button>
        </form>
        <div v-if="inviteError" class="error">{{ inviteError }}</div>
        <div v-if="inviteLink" class="success">
          Lien à envoyer :
          <input :value="inviteLink" readonly style="width: 100%; margin-top: 8px;" @focus="$event.target.select()" />
          <button @click="copyLink" style="margin-top: 8px;">Copier le lien</button>
          <span v-if="copied" style="color: #1a7f3c; margin-left: 10px;">Copié !</span>
        </div>
      </section>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import axios from 'axios'
import { useRouter } from 'vue-router'

const router = useRouter()
const gallery = ref([])
const newPhoto = ref({ url: '', title: '', formation: '' })
const photoError = ref('')

const formations = ref([])
const newFormation = ref({ title: '', description: '', duration: '', price: '' })
const formationError = ref('')
const editMode = ref(false)
const editFormationData = ref({ _id: '', title: '', description: '', duration: '', price: '' })

const inviteEmail = ref('')
const inviteError = ref('')
const inviteLink = ref('')
const copied = ref(false)

function getToken() {
  return localStorage.getItem('adminToken')
}

// Galerie
async function fetchGallery() {
  try {
    const res = await axios.get('http://localhost:5000/api/gallery', {
      headers: { Authorization: 'Bearer ' + getToken() }
    })
    gallery.value = res.data
  } catch (err) {
    photoError.value = 'Erreur chargement galerie'
  }
}
async function addPhoto() {
  photoError.value = ''
  try {
    await axios.post('http://localhost:5000/api/gallery', newPhoto.value, {
      headers: { Authorization: 'Bearer ' + getToken() }
    })
    newPhoto.value = { url: '', title: '', formation: '' }
    fetchGallery()
  } catch (err) {
    photoError.value = err.response?.data?.message || 'Erreur ajout photo'
  }
}
async function deletePhoto(id) {
  try {
    await axios.delete(`http://localhost:5000/api/gallery/${id}`, {
      headers: { Authorization: 'Bearer ' + getToken() }
    })
    fetchGallery()
  } catch (err) {
    photoError.value = 'Erreur suppression photo'
  }
}

// Formations
async function fetchFormations() {
  try {
    const res = await axios.get('http://localhost:5000/api/formation')
    formations.value = res.data
  } catch (err) {
    formationError.value = 'Erreur chargement formations'
  }
}
async function addFormation() {
  formationError.value = ''
  try {
    await axios.post('http://localhost:5000/api/formation', newFormation.value, {
      headers: { Authorization: 'Bearer ' + getToken() }
    })
    newFormation.value = { title: '', description: '', duration: '', price: '' }
    fetchFormations()
  } catch (err) {
    formationError.value = err.response?.data?.message || 'Erreur ajout formation'
  }
}
function editFormation(formation) {
  editMode.value = true
  editFormationData.value = { ...formation }
}
async function updateFormation() {
  try {
    await axios.put(`http://localhost:5000/api/formation/${editFormationData.value._id}`, editFormationData.value, {
      headers: { Authorization: 'Bearer ' + getToken() }
    })
    editMode.value = false
    fetchFormations()
  } catch (err) {
    formationError.value = 'Erreur modification formation'
  }
}
function cancelEdit() {
  editMode.value = false
  editFormationData.value = { _id: '', title: '', description: '', duration: '', price: '' }
}
async function deleteFormation(id) {
  try {
    await axios.delete(`http://localhost:5000/api/formation/${id}`, {
      headers: { Authorization: 'Bearer ' + getToken() }
    })
    fetchFormations()
  } catch (err) {
    formationError.value = 'Erreur suppression formation'
  }
}

// Invitations
async function inviteTestimonial() {
  inviteError.value = ''
  inviteLink.value = ''
  copied.value = false
  try {
    const res = await axios.post('http://localhost:5000/api/testimonials/invite', { email: inviteEmail.value }, {
      headers: { Authorization: 'Bearer ' + getToken() }
    })
    inviteLink.value = `${window.location.origin}/avis?token=${res.data.token}`
  } catch (err) {
    inviteError.value = err.response?.data?.message || 'Erreur lors de la génération du lien.'
  }
}
function copyLink() {
  if (inviteLink.value) {
    navigator.clipboard.writeText(inviteLink.value)
    copied.value = true
    setTimeout(() => { copied.value = false }, 1500)
  }
}

function logout() {
  localStorage.removeItem('adminToken')
  router.push('/admin-login')
}

onMounted(() => {
  if (!getToken()) router.push('/admin-login')
  else {
    fetchGallery()
    fetchFormations()
  }
})
</script>

<style scoped>
.admin-dashboard {
  max-width: 1200px;
  margin: 40px auto;
  background: #f8f8f8;
  border-radius: 18px;
  box-shadow: 0 4px 24px rgba(0,0,0,0.08);
  padding: 32px 32px 48px 32px;
}
.admin-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 32px;
}
.admin-header h2 {
  font-size: 2.2rem;
  font-family: var(--font-display, 'Montserrat', sans-serif);
  color: #2d2d2d;
  letter-spacing: 1px;
}
.admin-header h2 span {
  color: #9C8570;
  font-weight: 700;
}
.logout {
  background: #c00;
  color: #fff;
  border: none;
  border-radius: 8px;
  padding: 10px 22px;
  font-size: 1rem;
  cursor: pointer;
  transition: background 0.2s;
}
.logout:hover {
  background: #a00;
}
.dashboard-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 32px;
}
.dashboard-card {
  background: #fff;
  border-radius: 14px;
  box-shadow: 0 2px 12px rgba(0,0,0,0.06);
  padding: 28px 22px 32px 22px;
  min-height: 400px;
}
.dashboard-card h3 {
  margin-bottom: 18px;
  color: #9C8570;
  font-size: 1.3rem;
  font-weight: 600;
}
.add-form {
  display: flex;
  gap: 10px;
  margin-bottom: 18px;
  flex-wrap: wrap;
}
.add-form input {
  flex: 1 1 180px;
  padding: 10px;
  border-radius: 8px;
  border: 1.5px solid #e0e0e0;
  font-size: 15px;
  background: #faf9f7;
}
.add-form button {
  background: #9C8570;
  color: #fff;
  border: none;
  border-radius: 8px;
  padding: 10px 18px;
  font-size: 15px;
  cursor: pointer;
  transition: background 0.2s;
}
.add-form button:hover {
  background: #7c6a54;
}
.gallery-list {
  list-style: none;
  padding: 0;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
  gap: 18px;
}
.gallery-list li {
  background: #f7f7f7;
  border-radius: 10px;
  padding: 12px 8px 16px 8px;
  text-align: center;
  position: relative;
  box-shadow: 0 1px 4px rgba(0,0,0,0.04);
  display: flex;
  flex-direction: column;
  align-items: center;
}
.img-wrapper {
  width: 100%;
  height: 120px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #ececec;
  border-radius: 8px;
  margin-bottom: 8px;
  overflow: hidden;
}
.gallery-list img {
  max-width: 100%;
  max-height: 110px;
  border-radius: 6px;
  object-fit: cover;
}
.photo-info {
  margin-bottom: 6px;
}
.photo-title {
  font-weight: 600;
  color: #2d2d2d;
}
.photo-formation {
  font-size: 13px;
  color: #9C8570;
}
.delete-btn {
  background: #e74c3c;
  color: #fff;
  border: none;
  border-radius: 6px;
  padding: 5px 12px;
  cursor: pointer;
  margin-top: 6px;
  font-size: 1.1rem;
  transition: background 0.2s;
}
.delete-btn:hover {
  background: #c0392b;
}
.formation-list {
  list-style: none;
  padding: 0;
  margin-top: 18px;
}
.formation-list li {
  background: #f7f7f7;
  border-radius: 10px;
  padding: 14px 12px 12px 12px;
  margin-bottom: 12px;
  box-shadow: 0 1px 4px rgba(0,0,0,0.04);
}
.formation-main {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 4px;
}
.formation-duration {
  color: #9C8570;
  font-size: 13px;
  margin-left: 6px;
}
.formation-actions {
  display: flex;
  gap: 8px;
}
.edit-btn {
  background: #f1c40f;
  color: #fff;
  border: none;
  border-radius: 6px;
  padding: 4px 10px;
  cursor: pointer;
  font-size: 1.1rem;
  transition: background 0.2s;
}
.edit-btn:hover {
  background: #b59b0c;
}
.formation-desc {
  color: #444;
  font-size: 15px;
  margin-bottom: 2px;
}
.formation-price {
  color: #2d2d2d;
  font-size: 14px;
  font-weight: 500;
}
.edit-modal {
  position: fixed;
  top: 0; left: 0; right: 0; bottom: 0;
  background: rgba(0,0,0,0.18);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
}
.edit-modal-content {
  background: #fff;
  border-radius: 12px;
  padding: 32px 28px;
  min-width: 320px;
  box-shadow: 0 4px 24px rgba(0,0,0,0.13);
}
.cancel-btn {
  background: #bbb;
  color: #fff;
  border: none;
  border-radius: 8px;
  padding: 10px 18px;
  font-size: 15px;
  cursor: pointer;
  margin-left: 10px;
  transition: background 0.2s;
}
.cancel-btn:hover {
  background: #888;
}
.error {
  color: #c00;
  margin-bottom: 10px;
}
.success {
  color: #1a7f3c;
  margin-top: 10px;
}
@media (max-width: 900px) {
  .dashboard-grid {
    grid-template-columns: 1fr;
  }
}
</style>
