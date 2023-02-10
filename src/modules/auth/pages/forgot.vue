<template>
	<div class="min-h-screen bg-gray-100 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
		<div class="sm:mx-auto sm:w-full sm:max-w-md">
			<img alt="Workflow" class="mx-auto h-12 w-auto" src="https://tailwindui.com/img/logos/workflow-mark-primary-600.svg" />
			<h2 class="mt-6 text-center text-3xl font-extrabold text-primary-600">Request password reset</h2>
		</div>

		<div class="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
			<div class="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
				<form action="#" class="space-y-6" method="POST">
					<div>
						<label class="block text-sm font-medium text-gray-700" for="email"> Email address </label>
						<div class="mt-1">
							<input
								id="email"
								autocomplete="email"
								class="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-primary-500 focus:border-primary-500 sm:text-sm"
								name="email"
								required
								type="email"
							/>
						</div>
					</div>

					<div>
						<button
							class="
								w-full
								flex
								justify-center
								py-2
								px-4
								border border-transparent
								rounded-md
								shadow-sm
								text-sm
								font-medium
								text-white
								bg-primary-600
								hover:bg-primary-700
								focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500
							"
							type="submit"
						>
							Request password reset
						</button>
					</div>
				</form>
			</div>
		</div>
	</div>
</template>

<script lang="ts">
	import { defineComponent } from 'vue';

	export default defineComponent({
		name: 'Forgot',
	});
</script>
