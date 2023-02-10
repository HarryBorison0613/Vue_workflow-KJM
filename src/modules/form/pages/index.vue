<template>
	<AppLayout>
		<template #primary>
			<div class="max-w-3xl mx-auto px-4 max-w-full grid grid-cols-12 h-full min-h-full py-2">
				<div class="hidden lg:block lg:col-span-3 xl:col-span-2 h-full min-h-full border-r pr-4">
					<ul class="mt-3 grid grid-cols-1 gap-2" role="list">
						<li v-for="element in elements" :key="element.id" class="col-span-1 flex shadow-sm rounded-md">
							<div class="flex-1 flex items-center justify-between border border-gray-200 bg-white rounded-md truncate">
								<div class="flex-1 px-4 py-1 text-sm truncate">
									<p class="text-gray-900 font-medium hover:text-gray-600">{{ element.name }}</p>
								</div>
								<div class="flex-shrink-0 pr-2">
									<button class="w-8 h-8 bg-white inline-flex items-center justify-center text-gray-400 rounded-full bg-transparent hover:text-gray-500 focus:outline-none" type="button">
										<span class="sr-only">Open options</span>
										<HandIcon aria-hidden="true" class="w-5 h-5" />
									</button>
								</div>
							</div>
						</li>
					</ul>
				</div>
				<div class="lg:col-span-9 xl:col-span-6 px-4"></div>
				<div class="hidden xl:block xl:col-span-4">
					<div class="border-2 border-dashed border-gray-300 rounded-lg h-full"></div>
				</div>
			</div>
		</template>
	</AppLayout>
</template>

<script lang="ts">
	import { defineComponent } from 'vue';
	import AppLayout from '@layouts/AppLayout.vue';
	import { HandIcon } from '@heroicons/vue/solid';

	const elements = [
		{ id: 1, name: 'Text input' },
		{ id: 2, name: 'Dropdown list' },
		{ id: 3, name: 'Toggle switch' },
		{ id: 4, name: 'Secret/Password input' },
		{ id: 5, name: 'Email input' },
		{ id: 6, name: 'Number input' },
		{ id: 7, name: 'Button' },
		{ id: 8, name: 'Input group' },
		{ id: 9, name: 'Checkbox input' },
		{ id: 10, name: 'Radio input' },
		{ id: 11, name: 'Textarea' },
		{ id: 12, name: 'Date/Time input' },
		{ id: 13, name: 'File input' },
		{ id: 14, name: 'Section' },
		{ id: 15, name: 'Sub-form' },
	];

	export default defineComponent({
		name: 'FormIndex',
		components: {
			AppLayout,
			HandIcon,
		},
		setup() {
			return {
				elements,
			};
		},
	});
</script>
