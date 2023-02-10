<template>
	<div
		:class="{
			'mx-auto': centerTitle,
		}"
		class="md:flex md:items-center md:justify-between max-w-3xl md:space-x-6 md:max-w-7xl md:px-6"
	>
		<div class="flex-1 min-w-0">
			<slot name="breadcrumbs">
				<nav v-if="showBreadcrumbs" aria-label="Breadcrumb" class="flex mt-2 ml-1">
					<ol class="flex items-center space-x-4" role="list">
						<li>
							<div>
								<router-link :to="{ name: 'ticket.index' }" class="text-sm font-medium text-black hover:text-gray-500">Tickets</router-link>
							</div>
						</li>
						<li>
							<div class="flex items-center">
								<ChevronRightIcon aria-hidden="true" class="flex-shrink-0 h-5 w-5 text-black" />
								<router-link :to="{ name: 'ticket.show', params: { id: 1 } }" class="ml-4 text-sm font-medium text-black hover:text-gray-500">Ticket #1</router-link>
							</div>
						</li>
					</ol>
				</nav>
			</slot>
			<slot name="title">
				<h2 class="ml-1 my-2 text-2xl font-bold leading-7 sm:text-3xl sm:truncate text-black">{{ title }}</h2>
			</slot>
			<slot name="tags">
				<div v-if="$slots.tags" class="mb-3 -mt-1 ml-1 flex flex-col sm:flex-row sm:flex-wrap sm:space-x-6">
					<div v-for="tag in tags" :key="tag.label" :class="['mt-2 flex items-center text-sm text-black', tag.class ? tag.class : '']">
						<component :is="tag.icon" :class="['flex-shrink-0 mr-1.5 h-5 w-5 text-gray-500', tag.iconClass ? tag.iconClass : '']" aria-hidden="true" />
						{{ tag.label }}
					</div>
				</div>
			</slot>
		</div>
		<div v-if="$slots.actions" class="flex flex-col-reverse justify-stretch space-y-4 space-y-reverse sm:flex-row-reverse sm:justify-end sm:space-x-reverse sm:space-y-0 sm:space-x-3 md:mt-0 md:flex-row md:space-x-3">
			<slot name="actions"></slot>
		</div>
	</div>
</template>

<script lang="ts">
	import { defineComponent, PropType } from 'vue';
	import { ChevronRightIcon } from '@heroicons/vue/solid';
	import { PageHeaderTag } from '@/types';

	export default defineComponent({
		name: 'PageHeader',
		components: {
			ChevronRightIcon,
		},
		props: {
			title: { type: String, default: '' },
			tags: {
				type: Array as PropType<Array<PageHeaderTag>>,
				default() {
					return [];
				},
			},
			showBreadcrumbs: { type: Boolean, default: true },
			centerTitle: { type: Boolean, default: true },
		},
	});
</script>
