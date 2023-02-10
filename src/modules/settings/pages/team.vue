<template>
	<PageLayout>
		<StackedPanels>
			<PanelSection>
				<h1 class="text-3xl font-bold">Team settings</h1>
			</PanelSection>
		</StackedPanels>
	</PageLayout>
</template>

<script lang="ts">
	import { defineComponent } from 'vue';
	import PageLayout from '@layouts/PageLayout.vue';
	import PanelSection from '@components/PanelSection.vue';
	import StackedPanels from '@components/StackedPanels.vue';

	export default defineComponent({
		name: 'Team',
		components: { StackedPanels, PanelSection, PageLayout },
	});
</script>
