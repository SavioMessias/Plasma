import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Collections from '../views/Collections.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/collections',
    name: 'Collections',
    component: Collections
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
