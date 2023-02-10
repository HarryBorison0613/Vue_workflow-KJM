import { createWebHistory, createRouter } from 'vue-router';
const baseRoutes = [];
// Import all of the resource routes files.
function loadRoutes() {
	const routes = baseRoutes;
	const modules = import.meta.globEager('../modules/**/routes.ts'); //can't use alias mapping
	Object.values(modules).forEach((module) => {
		Object.values(module.default).forEach((route) => {
			routes.push(route);
		});
	});
	return routes;
}
const router = createRouter({
	history: createWebHistory(),
	routes: loadRoutes(),
});
export default router;
//# sourceMappingURL=index.js.map
