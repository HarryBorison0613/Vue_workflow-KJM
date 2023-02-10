import { RouteRecordRaw } from 'vue-router';

export const guestRoutes: RouteRecordRaw[] = [
	{
		path: '/login',
		name: 'login',
		component: () => import('./pages/login.vue'),
	},
	{
		path: '/reset',
		name: 'reset',
		component: () => import('./pages/reset.vue'),
	},
	{
		path: '/forgot',
		name: 'forgot',
		component: () => import('./pages/forgot.vue'),
	},
];

export const authRoutes: RouteRecordRaw[] = [];

export const adminRoutes: RouteRecordRaw[] = [];

export default [...guestRoutes, ...authRoutes, ...adminRoutes];
