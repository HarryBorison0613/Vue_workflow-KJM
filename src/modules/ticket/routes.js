export const guestRoutes = [
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
export const authRoutes = [];
export const adminRoutes = [];
export default [...guestRoutes, ...authRoutes, ...adminRoutes];
//# sourceMappingURL=routes.js.map
