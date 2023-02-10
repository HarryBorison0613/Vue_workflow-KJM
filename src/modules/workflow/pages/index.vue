<template>
	<AppLayout>
		<template #primary>
			<h1>Work flows</h1>
		</template>
	</AppLayout>
</template>

<script lang="ts">
	import { defineComponent } from 'vue';
	import AppLayout from '@layouts/AppLayout.vue';

	export default defineComponent({
		name: 'FormIndex',
		components: {
			AppLayout,
		},
	});
</script>
