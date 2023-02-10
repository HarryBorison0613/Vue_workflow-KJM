<template>
	<div class="space-y-6 sm:px-6 lg:px-0 lg:col-span-9">
		<slot></slot>
	</div>
</template>

<script lang="ts">
	import { defineComponent } from 'vue';

	export default defineComponent({
		name: 'StackedPanels',
	});
</script>
