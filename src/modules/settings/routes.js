export const guestRoutes = [];
export const authRoutes = [
	{
		path: '/settings',
		name: 'settings',
		component: () => import('./pages/index.vue'),
		children: [
			{
				path: 'billing',
				name: 'billing settings',
				component: () => import('./pages/billing.vue'),
			},
			{
				path: 'general',
				name: 'general settings',
				component: () => import('./pages/general.vue'),
			},
			{
				path: 'notifications',
				name: 'notifications settings',
				component: () => import('./pages/notifications.vue'),
			},
			{
				path: 'password',
				name: 'password settings',
				component: () => import('./pages/password.vue'),
			},
			{
				path: 'plan',
				name: 'plan settings',
				component: () => import('./pages/plan.vue'),
			},
			{
				path: 'team',
				name: 'team settings',
				component: () => import('./pages/team.vue'),
			},
		],
	},
];
export const adminRoutes = [];
export default [...guestRoutes, ...authRoutes, ...adminRoutes];
//# sourceMappingURL=routes.js.map
