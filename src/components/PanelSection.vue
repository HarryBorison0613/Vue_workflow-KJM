<template>
	<section>
		<div class="shadow sm:rounded-md sm:overflow-hidden">
			<div v-if="fullWidth" class="bg-white pt-6">
				<slot></slot>
			</div>
			<div v-else class="bg-white py-6 px-4 sm:p-6">
				<slot></slot>
			</div>
			<slot name="footer">test</slot>
		</div>
	</section>
</template>

<script lang="ts">
	import { defineComponent } from 'vue';

	export default defineComponent({
		name: 'PanelSection',
		props: {
			fullWidth: { type: Boolean, default: false },
		},
	});
</script>
