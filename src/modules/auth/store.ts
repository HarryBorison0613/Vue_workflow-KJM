import { defineStore } from 'pinia';

export const useAuthStore = defineStore({
	id: 'Auth',
	state: () => ({
		authUserId: parseInt(localStorage.getItem('user_id') ?? '') || false,
		authUsername: localStorage.getItem('username') || false,
		token: localStorage.getItem('token') || false,
		tokenExpires: parseInt(localStorage.getItem('token_expires') ?? '') || false,
		refreshToken: localStorage.getItem('refresh_token') || false,
		refreshTokenExpires: parseInt(localStorage.getItem('refresh_token_expires') ?? '') || false,
	}),
	getters: {
		/**
		 * Returns the current authentication status, return true if the token is
		 * not empty and the expiry is less than the current time
		 *
		 * @returns {boolean}
		 */
		isAuthenticated: (state) => {
			return state.token !== false && state.tokenExpires > Math.round(Date.now() / 1000);
		},
		/**
		 * Return the user id of the currently authenticated user
		 * @returns {number|boolean}
		 */
		getAuthUserID: (state) => {
			return state.authUserId;
		},
		/**
		 * Returns authenticated users username/email (depends on what they used to
		 * login with)
		 * @returns {string|boolean}
		 */
		getAuthUsername: (state) => {
			return state.authUsername;
		},
		/**
		 * Return the current authentication token
		 * @returns {string|boolean}
		 */
		getAuthToken: (state) => {
			return state.token;
		},
		/**
		 * Returns a timestamp for when the current users authentication token expires
		 * @returns {number|boolean}
		 */
		getAuthTokenExpiry: (state) => {
			return state.tokenExpires;
		},
		/**
		 * Returns the current authenticated users refresh token
		 * @returns {string|boolean}
		 */
		getAuthRefreshToken: (state) => {
			return state.refreshToken;
		},
		/**
		 * Returns a timestamp for when the current users refresh authentication token expires
		 * @returns {number|boolean}
		 */
		getAuthRefreshTokenExpiry: (state) => {
			return state.refreshTokenExpires;
		},
	},
	actions: {},
});
