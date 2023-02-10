export const guestRoutes = [
	{
		path: '/',
		name: 'dashboard',
		component: () => import('./pages/index.vue'),
	},
];
export const authRoutes = [];
export const adminRoutes = [];
export default [...guestRoutes, ...authRoutes, ...adminRoutes];
//# sourceMappingURL=routes.js.map
