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
  },
  {
    path: '/computed',
    name: 'Computed',
    component: () => import('../views/Computed.vue')
  },
  {
    path: '/watcheffect',
    name: 'WatchEffect',
    component: () => import('../views/WatchEffect.vue')
  },
  {
    path: '/watch',
    name: 'Watch',
    component: () => import('../views/Watch.vue')
  },
  {
    path: '/lifecyclehooks',
    name: 'LifecycleHooks',
    component: () => import('../views/LifecycleHooks.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
