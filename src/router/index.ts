import { createRouter, createWebHistory, Router, RouteRecordRaw } from 'vue-router';

const baseRoutes: RouteRecordRaw[] = [];

// Import all of the resource routes files.
function loadRoutes(): RouteRecordRaw[] {
	const routes: RouteRecordRaw[] = baseRoutes;
	const modules = import.meta.globEager('../modules/**/routes.ts'); //can't use alias mapping

	Object.values(modules).forEach((module) => {
		Object.values(module.default).forEach((route) => {
			routes.push(<RouteRecordRaw>route);
		});
	});

	return routes;
}

const router: Router = createRouter({
	history: createWebHistory(),
	routes: loadRoutes(),
});

export default router;
