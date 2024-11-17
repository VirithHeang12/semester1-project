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
        path: '/categories',
        name: 'categories',
        children: [
            {
                path: 'kitchen',
                name: 'kitchen',
                component: () => import('../views/page/kitchen/KitchenView.vue')
            },
            {
                path: 'livingroom',
                name: 'livingroom',
                component: () => import('../views/page/livingroom/LivingRoomView.vue')
            },
            {
                path: 'bedroom',
                name: 'bedroom',
                component: () => import('../views/page/bedroom/BedroomView.vue')
            },
            {
                path: 'office',
                name: 'office',
                component: () => import('../views/page/office/OfficeView.vue')
            },
            {
                path: 'outdoor',
                name: 'outdoor',
                component: () => import('../views/page/outdoor/OutdoorView.vue')
            }
        ],
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
