import { defineStore } from 'pinia';
// useStore could be anything like useUser, useCart
export const useBaseStore = defineStore({
	// unique id of the store across your application
	id: 'Base',
	state: () => ({
		version: '0.0.1',
		secondaryPanelOpen: true,
	}),
	getters: {},
	actions: {
		toggleSecondaryPanel() {
			this.secondaryPanelOpen = !this.secondaryPanelOpen;
		},
	},
});
//# sourceMappingURL=index.js.map
