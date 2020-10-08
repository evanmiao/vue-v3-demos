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
  },
  {
    path: '/templaterefs',
    name: 'TemplateRefs',
    component: () => import('../views/TemplateRefs.vue')
  },
  {
    path: '/slot',
    name: 'Slot',
    component: () => import('../views/Slot/Slot.vue')
  },
  {
    path: '/propemit',
    name: 'PropEmit',
    component: () => import('../views/PropEmit/PropEmit.vue')
  },
  {
    path: '/provideinject',
    name: 'ProvideInject',
    component: () => import('../views/ProvideInject/ProvideInject.vue')
  },
  {
    path: '/routeProp',
    name: 'RouteProp',
    component: () => import('../views/RouteProp/RouteProp.vue'),
    redirect: {
      name: 'RoutePropChild1'
    },
    children: [{
      path: 'child1',
      name: 'RoutePropChild1',
      component: () => import('../views/RouteProp/components/Child1.vue'),
      props: route => ({
        query: route.query
      })
    }, {
      path: 'child2/:paramID',
      name: 'RoutePropChild2',
      component: () => import('../views/RouteProp/components/Child2.vue'),
      props: route => ({
        params: route.params
      })
    }]
  },
  {
    path: '/:catchAll(.*)',
    name: 'All',
    component: Setup
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
