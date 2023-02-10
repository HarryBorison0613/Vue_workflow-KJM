import { defineStore } from 'pinia';
export const useUserStore = defineStore({
	id: 'User',
	state: () => ({
		loaded: false,
		user: {},
	}),
	getters: {
		isUserLoaded: (state) => state.loaded,
		getUser: (state) => (state.loaded ? state.user : null),
		getUserID: (state) => (state.loaded ? state.user.id : 0),
		getUserName: (state) => (state.loaded ? state.user.username : 'emily.selman'),
		getUserFullName: (state) => (state.loaded ? state.user.fullName : 'Emily Selman'),
		getUserTimeZone: (state) => (state.loaded ? state.user.TZ : 'Australia/Sydney'),
		getUserAvatar: (state) => (state.loaded ? state.user.avatar.url : 'https://images.unsplash.com/photo-1502685104226-ee32379fefbe?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'),
	},
	actions: {},
});
//# sourceMappingURL=store.js.map
