export const guestRoutes = [
	{
		path: '/form',
		name: 'form.index',
		component: () => import('./pages/index.vue'),
	},
];
export const authRoutes = [];
export const adminRoutes = [];
export default [...guestRoutes, ...authRoutes, ...adminRoutes];
//# sourceMappingURL=routes.js.map
