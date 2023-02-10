import { RouteRecordRaw } from 'vue-router';

export const guestRoutes: RouteRecordRaw[] = [
	{
		path: '/',
		name: 'dashboard',
		component: () => import('./pages/index.vue'),
	},
];

export const authRoutes: RouteRecordRaw[] = [];

export const adminRoutes: RouteRecordRaw[] = [];

export default [...guestRoutes, ...authRoutes, ...adminRoutes];
