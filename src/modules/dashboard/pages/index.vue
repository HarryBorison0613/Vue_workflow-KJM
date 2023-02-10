<!--
  This example requires Tailwind CSS v2.0+

  This example requires some changes to your config:

  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/forms'),
    ]
  }
  ```
-->
<template>
	<AppLayout>
		<template #navigation>
			<div class="px-4 sm:px-6 lg:max-w-6xl lg:mx-auto lg:px-8">
				<div class="md:flex md:items-center md:justify-between">
					<div class="flex-1 min-w-0">
						<!-- Profile -->
						<div class="flex items-center">
							<img :src="userAvatar" alt="" class="hidden h-12 w-12 rounded-full sm:block" />
							<div>
								<div class="flex items-center">
									<h1 class="ml-3 text-2xl font-bold leading-7 text-gray-900 sm:leading-9 sm:truncate">Good morning, {{ userFullName }}</h1>
								</div>
								<dl class="mt-6 flex flex-col sm:ml-3 sm:-mt-0.5 sm:flex-row sm:flex-wrap">
									<dt class="sr-only">Company</dt>
									<dd class="flex items-center text-sm text-gray-500 font-medium capitalize sm:mr-6">
										<OfficeBuildingIcon aria-hidden="true" class="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400" />
										Duke street studio
									</dd>
									<dt class="sr-only">Account status</dt>
									<dd class="mt-3 flex items-center text-sm text-gray-500 font-medium sm:mr-6 sm:mt-0 capitalize">
										<CheckCircleIcon aria-hidden="true" class="flex-shrink-0 mr-1.5 h-5 w-5 text-success-400" />
										Sales manager
									</dd>
								</dl>
							</div>
						</div>
					</div>
				</div>
			</div>
		</template>
		<template #primary></template>
	</AppLayout>
</template>

<script lang="ts">
	import { CheckCircleIcon, OfficeBuildingIcon } from '@heroicons/vue/solid';

	import { defineComponent } from 'vue';
	import AppLayout from '@layouts/AppLayout.vue';
	import { useUserStore } from '@modules/user/store';

	export default defineComponent({
		name: 'Home',
		components: {
			AppLayout,
			CheckCircleIcon,
			OfficeBuildingIcon,
		},
		setup() {
			const userStore = useUserStore();

			return {
				userFullName: userStore.getUserFullName,
				userAvatar: userStore.getUserAvatar,
			};
		},
	});
</script>
