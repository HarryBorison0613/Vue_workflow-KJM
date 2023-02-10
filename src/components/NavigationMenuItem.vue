<template>
	<router-link v-if="item.category === 'User'" :key="item.name" :class="[$route.name === item.to?.name ? selectedClass : notSelectedClass, itemClass]" :to="item.to">
		<component :is="item.icon" :class="[$route.name === item.to?.name ? iconSelectedClass : iconNotSelectedClass, iconClass]" aria-hidden="true" />
		<span class="mt-2">{{ item.name }}</span>
	</router-link>
	<hr v-else-if="item.category === 'Break'" :class="breakClass" />
	<router-link v-else-if="item.category === 'Builder'" :key="item.name" :class="[$route.name === item.to?.name ? selectedClass : notSelectedClass, itemClass]" :to="item.to">
		<component :is="item.icon" :class="[$route.name === item.to?.name ? iconSelectedClass : iconNotSelectedClass, iconClass]" aria-hidden="true" />
		<span class="mt-2">{{ item.name }}</span>
	</router-link>
</template>

<script lang="ts">
	import { defineComponent, PropType } from 'vue';
	import { NavigationMenuItemType } from '@/types';

	export default defineComponent({
		name: 'NavigationMenuItem',
		props: {
			item: { type: Object as PropType<NavigationMenuItemType>, required: true },
			hoverClass: { type: String, default: '' },
			selectedClass: { type: String, default: 'bg-primary-800 text-white' },
			notSelectedClass: { type: String, default: 'text-primary-100 hover:bg-primary-800 hover:text-white' },
			itemClass: { type: String, default: 'group w-full p-3 rounded-md flex flex-col items-center text-xs font-medium my-1' },
			iconSelectedClass: { type: String, default: 'text-white' },
			iconNotSelectedClass: { type: String, default: 'text-primary-300 group-hover:text-white' },
			iconClass: { type: String, default: 'h-6 w-6' },
			breakClass: { type: String, default: 'mt-2' },
			ariaCurrent: { type: String, default: undefined },
		},
	});
</script>
