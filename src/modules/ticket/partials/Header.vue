<template>
	<PageHeader :tags="tags" title="Ticket #1">
		<template #actions>
			<DropdownButton></DropdownButton>
			<button
				class="
					inline-flex
					items-center
					justify-center
					px-4
					py-2
					border border-transparent
					text-sm
					font-medium
					rounded-md
					shadow-sm
					text-white
					bg-blue-600
					hover:bg-blue-700
					focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-blue-500
				"
				type="button"
			>
				Resolve ticket
			</button>
		</template>
	</PageHeader>
</template>

<script lang="ts">
	import { defineComponent } from 'vue';

	import PageHeader from '@components/PageHeader.vue';
	import DropdownButton from '@components/DropdownButton.vue';
	import { PageHeaderTag } from '@/types';
	import { CalendarIcon, ClockIcon, CogIcon, UserIcon } from '@heroicons/vue/solid';

	const tags: PageHeaderTag[] = [
		{
			label: 'Brian Hoedown',
			icon: UserIcon,
		},
		{
			label: '25th August 2021',
			icon: CalendarIcon,
		},
		{
			label: '16 hours ago',
			icon: ClockIcon,
		},
		{
			label: 'Technical',
			icon: CogIcon,
		},
	];

	export default defineComponent({
		name: 'Header',
		components: {
			DropdownButton,
			PageHeader,
		},
		setup() {
			return {
				tags,
			};
		},
	});
</script>
