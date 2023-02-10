import { RouteRecordRaw } from 'vue-router';

export const guestRoutes: RouteRecordRaw[] = [];

export const authRoutes: RouteRecordRaw[] = [];

export const adminRoutes: RouteRecordRaw[] = [];

export default [...guestRoutes, ...authRoutes, ...adminRoutes];
