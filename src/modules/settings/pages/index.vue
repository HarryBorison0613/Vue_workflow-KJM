<template>
	<AppLayout>
		<template #navigation>
			<HeaderNavigationTabs :tabs="tabs" />
		</template>
		<template #primary>
			<router-view></router-view>
		</template>
	</AppLayout>
</template>

<script lang="ts">
	import { defineComponent, ref } from 'vue';
	import AppLayout from '@layouts/AppLayout.vue';
	import { HeaderNavigationTab } from '@/types';
	import HeaderNavigationTabs from '@components/HeaderNavigationTabs.vue';

	const tabs: HeaderNavigationTab[] = [
		{ name: 'General', to: { name: 'general settings' }, selected: false },
		{ name: 'Password', to: { name: 'password settings' }, selected: false },
		{ name: 'Notifications', to: { name: 'notifications settings' }, selected: false },
		{ name: 'Plan', to: { name: 'plan settings' }, selected: false },
		{ name: 'Billing', to: { name: 'billing settings' }, selected: true },
		{ name: 'Team Members', to: { name: 'team settings' }, selected: false },
	];

	export default defineComponent({
		components: {
			HeaderNavigationTabs,
			AppLayout,
		},
		setup() {
			const sidebarOpen = ref(false);

			return {
				tabs,
				sidebarOpen,
			};
		},
	});
</script>
