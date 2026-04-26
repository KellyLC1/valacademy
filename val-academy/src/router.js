import { createRouter, createWebHistory } from 'vue-router'
import Home from './pages/Home.vue'

const routes = [
  { path: '/', component: Home },
  { path: '/admin-login', component: () => import('./pages/AdminLogin.vue') },
  { path: '/admin', component: () => import('./pages/AdminDashboard.vue') },
  { path: '/avis', component: () => import('./pages/TestimonialForm.vue') },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
