export const guestRoutes = [
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
export const authRoutes = [];
export const adminRoutes = [];
export default [...guestRoutes, ...authRoutes, ...adminRoutes];
//# sourceMappingURL=routes.js.map
