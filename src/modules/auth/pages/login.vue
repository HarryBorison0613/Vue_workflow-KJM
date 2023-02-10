<template>
	<div class="min-h-screen bg-gray-900 flex">
		<div class="flex-1 flex flex-col justify-center py-12 px-4 sm:px-6 lg:flex-none lg:px-20 xl:px-24">
			<div class="mx-auto w-full max-w-sm lg:w-96">
				<div>
					<img alt="Workflow" class="h-12 w-auto" src="https://tailwindui.com/img/logos/workflow-mark-primary-600.svg" />
					<h2 class="mt-6 text-3xl font-extrabold text-white">Login to your account</h2>
				</div>

				<div class="mt-6">
					<div>
						<div class="mt-6 relative">
							<div aria-hidden="true" class="absolute inset-0 flex items-center">
								<div class="w-full border-t border-gray-300" />
							</div>
							<div class="relative flex justify-center text-sm">
								<span class="px-2 bg-white text-gray-500"> </span>
							</div>
						</div>
					</div>

					<div class="mt-6">
						<form action="#" class="space-y-6" method="POST">
							<div>
								<label class="block text-sm font-medium text-white" for="email"> Email address </label>
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

							<div class="space-y-1">
								<label class="block text-sm font-medium text-white" for="password"> Password </label>
								<div class="mt-1">
									<input
										id="password"
										autocomplete="current-password"
										class="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-primary-500 focus:border-primary-500 sm:text-sm"
										name="password"
										required
										type="password"
									/>
								</div>
							</div>

							<div class="flex items-center justify-between">
								<div class="flex items-center">
									<input id="remember_me" class="h-4 w-4 text-primary-600 focus:ring-primary-500 border-gray-300 rounded" name="remember_me" type="checkbox" />
									<label class="ml-2 block text-sm text-white" for="remember_me"> Remember me </label>
								</div>

								<div class="text-sm">
									<router-link class="font-medium text-primary-400 hover:text-primary-500" to="/forgot"> Forgot your password?</router-link>
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
									Login
								</button>
							</div>
						</form>
					</div>
				</div>
			</div>
		</div>
		<div class="hidden lg:block relative w-0 flex-1">
			<img alt="" class="absolute inset-0 h-full w-full object-cover" src="https://images.unsplash.com/photo-1529412983309-f09e81bbcdc0?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1908&q=80" />
		</div>
	</div>
</template>

<script lang="ts">
	import { defineComponent } from 'vue';

	export default defineComponent({
		name: 'Login',
	});
</script>
