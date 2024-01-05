import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(),
  scrollBehavior() {
    window.scrollTo(0, 0)
  },
  routes: [
    {
      path: '/',
      name: 'home-page',
      component: () => import('@/views/HomePage.vue')
    },
    {
      path: '/location',
      name: 'location-page',
      component: () => import('@/views/LocationPage.vue')
    },
    {
      path: '/property-detail/:id/:slug',
      name: 'property-detail',
      component: () => import('@/views/DetailPropertyPage.vue')
    },
    {
      path: '/location-detail/:id/:slug',
      name: 'location-detail',
      component: () => import('@/views/DetailLocationPage.vue')
    }
  ]
})

export default router
