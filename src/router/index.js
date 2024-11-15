import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/page/home/HomeView.vue')
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/page/about/AboutView.vue')
    },
    {
      path: '/contact',
      name: 'contact',
      component: () => import('../views/page/contact/ContactView.vue')
    }
  ]
})

export default router
