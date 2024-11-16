import HomeView from '@/views/page/home/HomeView.vue'
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	routes: [
	{
		path: '/',
		name: 'home',
		component: HomeView
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
	},
	{
		path: '/auth',
		component: { 
			render: (c) => c('router-view') 
		}, 
		children: [
			{
				path: 'login',
				name: 'login',
				component: () => import('../views/page/authentication/LoginView.vue')
			},
			{
				path: 'register',
				name: 'register',
				component: () => import('../views/page/authentication/RegisterView.vue')
			}
		]	
	},
  ]
})

export default router
