import { createRouter, createWebHashHistory } from 'vue-router'
import Setup from '../views/Setup.vue'

const routes = [
  {
    path: '/',
    name: 'Setup',
    component: Setup
  },
  {
    path: '/ref',
    name: 'Ref',
    component: () => import('../views/Ref.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
