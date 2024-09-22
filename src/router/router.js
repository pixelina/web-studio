import { createRouter, createWebHistory } from 'vue-router'
import MainPage from '@/pages/MainPage.vue'
import Portfolio from '@/pages/Portfolio.vue'
import Contacts from '@/pages/Contacts.vue'

const routes = [
  {
    path: '/',
    component: MainPage
  },
  {
    path: '/portfolio',
    component: Portfolio
  },
  {
    path: '/contacts',
    component: Contacts
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
