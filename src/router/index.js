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
  },
  {
    path: '/reactive',
    name: 'Reactive',
    component: () => import('../views/Reactive.vue')
  },
  {
    path: '/torefs',
    name: 'ToRefs',
    component: () => import('../views/ToRefs.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
