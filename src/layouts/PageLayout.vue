<template>
	<div class="relative max-w-7xl mx-auto md:px-8 xl:px-0 bg-gray-100">
		<div class="pt-5 pb-16 px-16">
			<div class="px-4 sm:px-6 md:px-0">
				<slot></slot>
			</div>
		</div>
	</div>
</template>

<script lang="ts">
	import { defineComponent } from 'vue';

	export default defineComponent({
		name: 'PageLayout',
	});
</script>
