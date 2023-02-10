<template>
	<nav class="pt-2.5 h-full min-h-full max-h-full flex justify-center space-x-8">
		<router-link
			v-for="tab in tabs"
			:key="tab.name"
			:class="$route.name === tab.to?.name ? 'border-primary-500 bg-primary-500 hover:bg-primary-400 text-white' : 'border-transparent text-gray-500  hover:text-gray-700'"
			:to="tab.to"
			class="whitespace-nowrap py-4 px-1 border-b-2 hover:border-primary-300 font-medium text-sm hover:bg-primary-100 px-12 rounded-tr-md rounded-tl-md"
		>
			{{ tab.name }}
		</router-link>
	</nav>
</template>

<script lang="ts">
	import { defineComponent, PropType } from 'vue';
	import { HeaderNavigationTab } from '@/types';
	import { useRouter } from 'vue-router';

	export default defineComponent({
		name: 'HeaderNavigationTabs',
		props: {
			tabs: { type: Array as PropType<HeaderNavigationTab[]>, required: true },
		},
		setup() {
			const route = useRouter();
			return {
				route,
			};
		},
	});
</script>
