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
      path: '/detail',
      name: 'detail-page',
      component: () => import('@/views/DetailPage.vue')
    }
  ]
})

export default router
