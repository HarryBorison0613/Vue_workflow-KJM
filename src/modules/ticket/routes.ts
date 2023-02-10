import { RouteRecordRaw } from 'vue-router';

export const guestRoutes: RouteRecordRaw[] = [
	{
		path: '/ticket',
		name: 'ticket.index',
		component: () => import('./pages/index.vue'),
	},
	{
		path: '/ticket/:id',
		name: 'ticket.show',
		component: () => import('./pages/show.vue'),
	},
];

export const authRoutes: RouteRecordRaw[] = [];

export const adminRoutes: RouteRecordRaw[] = [];

export default [...guestRoutes, ...authRoutes, ...adminRoutes];
