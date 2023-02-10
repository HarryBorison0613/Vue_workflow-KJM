<template>
	<div class="h-screen overflow-hidden bg-gray-100 flex flex-col">
		<!-- Top nav - Mobile/Desktop-->
		<header class="flex-shrink-0 relative h-16 bg-white flex items-center">
			<!-- Logo area - Mobile/Desktop -->
			<div class="absolute inset-y-0 left-0 md:static md:flex-shrink-0">
				<a class="flex items-center justify-center h-16 w-16 bg-primary-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary-600 md:w-24 text-xl text-white" href="#"> LOGO </a>
			</div>

			<!-- MOBILE HEADER -->
			<!-- Search area -->
			<div class="ml-20 md:hidden">
				<div class="relative text-gray-400 focus-within:text-gray-500">
					<label class="sr-only" for="search">Search</label>
					<input id="search" class="block w-48 border-gray-300 rounded-md pl-10 placeholder-gray-500 focus:border-primary-600 focus:ring-primary-600" placeholder="Search" type="search" />
					<div class="absolute inset-y-0 left-0 flex items-center justify-center pl-3">
						<SearchIcon aria-hidden="true" class="h-5 w-5" />
					</div>
				</div>
			</div>

			<!-- Notification button area -->
			<div class="absolute inset-y-0 right-11 pr-5 flex items-center sm:pr-6 md:hidden">
				<!-- Notification button -->
				<button class="-mr-2 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary-600" type="button">
					<span class="sr-only">Open notifications</span>
					<BellIcon aria-hidden="true" class="block h-6 w-6" />
				</button>
			</div>

			<!-- Menu button area -->
			<div class="absolute inset-y-0 right-0 pr-5 flex items-center sm:pr-6 md:hidden">
				<!-- Mobile menu button -->
				<button
					class="-mr-2 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary-600"
					type="button"
					@click="mobileMainMenuOpen = true"
				>
					<span class="sr-only">Open main menu</span>
					<MenuIcon aria-hidden="true" class="block h-6 w-6" />
				</button>
			</div>
			<!-- END MOBILE HEADER -->
			<!-- DESKTOP HEADER -->
			<!-- Desktop nav area -->
			<nav class="hidden md:min-w-0 md:flex max-w-full w-full bg-white">
				<div class="flex-1 max-w-full w-full mx-auto px-2">
					<div class="relative flex items-center justify-between">
						<!-- Spacer -->
						<div class="flex-none w-48 items-center justify-end space-x-6 px-2"></div>

						<!-- Second level nav -->
						<div class="flex-1 flex justify-center lg:justify-center">
							<slot name="navigation"></slot>
						</div>

						<!-- Links section -->
						<div class="flex-none w-48 items-center space-x-10">
							<div class="flex items-end justify-end space-x-6 px-2 mr-2">
								<span class="inline-flex">
									<button class="-mx-1 bg-white p-1 rounded-full text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 inline-block relative">
										<span class="sr-only">Search</span>
										<SearchIcon aria-hidden="true" class="h-7 w-7" />
									</button>
								</span>
								<span class="inline-flex">
									<button class="-mx-1 bg-white p-1 rounded-full text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 inline-block relative">
										<span class="sr-only">View announcements</span>
										<SpeakerphoneIcon aria-hidden="true" class="h-7 w-7" />
										<span class="absolute top-1 right-1.5 block h-2 w-2 rounded-full ring-1 ring-white bg-danger-400" />
									</button>
								</span>
								<span class="inline-flex">
									<button class="-mx-1 bg-white p-1 rounded-full text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 inline-block relative">
										<span class="sr-only">View notifications</span>
										<BellIcon aria-hidden="true" class="h-7 w-7" />
										<span class="absolute top-1 right-1.5 block h-2 w-2 rounded-full ring-1 ring-white bg-danger-400" />
									</button>
								</span>
							</div>
						</div>
					</div>
				</div>
			</nav>
			<!-- END DESKTOP HEADER -->
			<!-- Mobile menu, show/hide this `div` based on menu open/closed state -->
			<TransitionRoot :show="mobileMainMenuOpen" as="template">
				<Dialog :open="mobileMainMenuOpen" as="div" class="fixed inset-0 z-40 md:hidden" static @close="mobileMainMenuOpen = false">
					<TransitionChild as="template" enter="transition-opacity ease-linear duration-300" enter-from="opacity-0" enter-to="opacity-100" leave="transition-opacity ease-linear duration-300" leave-from="opacity-100" leave-to="opacity-0">
						<DialogOverlay class="hidden sm:block sm:fixed sm:inset-0 sm:bg-gray-600 sm:bg-opacity-75" />
					</TransitionChild>
					<TransitionChild
						as="template"
						enter="transition ease-out duration-150 sm:ease-in-out sm:duration-300"
						enter-from="transform-gpu opacity-0 scale-110 sm:translate-x-full sm:scale-100 sm:opacity-100"
						enter-to="transform-gpu opacity-100 scale-100  sm:translate-x-0 sm:scale-100 sm:opacity-100"
						leave="transition ease-in duration-150 sm:ease-in-out sm:duration-300"
						leave-from="transform-gpu opacity-100 scale-100 sm:translate-x-0 sm:scale-100 sm:opacity-100"
						leave-to="transform-gpu opacity-0 scale-110  sm:translate-x-full sm:scale-100 sm:opacity-100"
					>
						<nav aria-label="Global" class="fixed z-40 inset-0 h-full w-full bg-white sm:inset-y-0 sm:left-auto sm:right-0 sm:max-w-sm sm:w-full sm:shadow-lg">
							<div class="h-16 flex items-center justify-between px-4 sm:px-6">
								<a href="#">
									<img alt="Workflow" class="block h-8 w-auto" src="https://tailwindui.com/img/logos/workflow-mark.svg?color=primary&shade=500" />
								</a>
								<button
									class="-mr-2 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary-600"
									type="button"
									@click="mobileMainMenuOpen = false"
								>
									<span class="sr-only">Close main menu</span>
									<XIcon aria-hidden="true" class="block h-6 w-6" />
								</button>
							</div>
							<div class="max-w-8xl mx-auto py-3 px-2 sm:px-4">
								<navigation-menu-item
									v-for="item in navigation"
									:key="item.name"
									:break-class="'my-2 border-t-1'"
									:icon-class="'h-6 w-6 mr-4'"
									:icon-not-selected-class="''"
									:icon-selected-class="''"
									:item="item"
									:item-class="'block rounded-md py-1 pb-3 px-3 text-base font-medium text-gray-900 hover:bg-gray-100 flex items-end'"
									:not-selected-class="''"
									:selected-class="''"
								/>
							</div>
							<div class="absolute bottom-0 flex p-4 pb-4 pr-16 bg-primary-800 w-full">
								<a class="flex-shrink-0 group block rounded-md py-1 px-2 text-primary-100 hover:bg-primary-800 hover:text-white w-full" href="#">
									<div class="flex items-center">
										<img :src="userAvatar" alt="" class="inline-block h-14 w-14 rounded-full" />
										<div class="ml-6 w-52">
											<p class="text-base font-medium text-lg text-white">{{ userFullName }}</p>
											<p class="text-sm font-light text-primary-100 group-hover:text-white">Account settings</p>
										</div>
									</div>
								</a>
								<div class="absolute right-12 bottom-12">
									<button class="mx-auto my-auto w-9 h-9 text-white absolute inset-0 z-10 flex justify-center items-center" type="button">
										<LogoutIcon />
									</button>
								</div>
							</div>
						</nav>
					</TransitionChild>
				</Dialog>
			</TransitionRoot>
		</header>

		<!-- Bottom section -->
		<div class="min-h-0 flex-1 flex overflow-hidden">
			<!-- Narrow sidebar-->
			<nav aria-label="Sidebar" class="hidden md:flex md:flex-shrink-0">
				<div class="flex flex-col w-24">
					<div class="flex flex-col h-0 flex-1 overflow-y-auto bg-gray-800">
						<div class="flex-1 flex flex-col items-center">
							<div class="flex-1 mt-4 w-full px-2 space-y-2">
								<navigation-menu-item
									v-for="item in navigation"
									:key="item.name"
									:break-class="'my-4 border-t-1'"
									:icon-class="'h-6 w-6'"
									:icon-not-selected-class="'text-primary-300 group-hover:text-white'"
									:icon-selected-class="'text-white'"
									:item="item"
									:item-class="'group w-full p-3 rounded-md flex flex-col items-center text-xs font-medium'"
									:not-selected-class="'text-primary-100 hover:bg-primary-800 hover:text-white'"
									:selected-class="'bg-primary-800 text-white'"
								/>
							</div>
						</div>
						<div class="flex-shrink-0 flex pt-4 pb-1 items-center bg-primary-700">
							<router-link :to="{ name: 'settings' }" class="flex-shrink-0 w-full items-center group">
								<div class="h-14 w-14 relative group mx-auto">
									<div :style="{ 'background-image': 'url(' + userAvatar + ')' }" class="absolute inset-0 bg-cover rounded-full bg-center z-0 group-hover:opacity-50"></div>
									<CogIcon class="mx-auto my-auto w-9 h-9 opacity-0 group-hover:opacity-100 group-hover:text-white absolute inset-0 z-10 flex justify-center items-center text-primary-100"></CogIcon>
								</div>
							</router-link>
						</div>
						<div class="flex-shrink-0 flex items-center bg-primary-700 text-white text-center w-full">
							<span class="mx-auto">{{ version }}</span>
						</div>
					</div>
				</div>
			</nav>

			<!-- Main Content -->
			<div class="flex-1 flex items-stretch overflow-hidden border-t border-gray-200">
				<main :class="['flex-1 overflow-y-auto h-full max-h-full', sidePanelOpen ? 'lg:w-3/5 lg:max-w-3/5' : 'lg:w-full lg:max-w-full']">
					<slot name="primary"></slot>
				</main>
			</div>

			<!-- Secondary Content -->
			<TransitionRoot
				:show="sidePanelOpen"
				as="template"
				enter="transition ease-in-out duration-500 lg:duration-400"
				enter-from="transform-gpu -translate-x-full"
				enter-to="transform-gpu translate-x-0"
				leave="transition ease-in-out duration-500 lg:duration-400"
				leave-from="transform-gpu translate-x-0"
				leave-to="transform-gpu -translate-x-full"
			>
				<div class="absolute overflow-hidden">
					<div class="fixed inset-y-0 right-0 top-16 flex border-t border-gray-200 lg:pl-10 w-full lg:w-2/5">
						<aside class="h-full w-full bg-white">
							<div class="h-full flex flex-col py-4">
								<div class="px-4 lg:px-0 lg:hidden">
									<div class="flex items-start justify-between">
										<h2 class="text-lg font-medium text-gray-900">Panel title</h2>
										<div class="ml-3 h-7 flex items-center">
											<button class="bg-white rounded-md text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500" @click="toggleSidePanel">
												<span class="sr-only">Close panel</span>
												<XIcon aria-hidden="true" class="h-6 w-6" />
											</button>
										</div>
									</div>
								</div>
								<div class="mt-4 lg:mt-0 relative flex-1 px-4 overflow-y-auto">
									<slot name="secondary"></slot>
								</div>
							</div>
						</aside>
					</div>
				</div>
			</TransitionRoot>
		</div>
	</div>
</template>

<script lang="ts">
	import { computed, defineComponent, ref } from 'vue';
	import { Dialog, DialogOverlay, TransitionChild, TransitionRoot } from '@headlessui/vue';
	import { BellIcon, CodeIcon, CogIcon, HomeIcon, LogoutIcon, MenuIcon, SearchIcon, SpeakerphoneIcon, TemplateIcon, TicketIcon, VariableIcon, XIcon } from '@heroicons/vue/outline';
	import NavigationMenuItem from '@components/NavigationMenuItem.vue';
	import { NavigationMenuItemType } from '@/types';
	import { useBaseStore } from '@store';
	import { useUserStore } from '@modules/user/store';

	let navigation: Array<NavigationMenuItemType> = [
		{ name: 'Dashboard', to: { name: 'dashboard' }, icon: HomeIcon, category: 'User' },
		{ name: 'Tickets', to: { name: 'ticket.index' }, icon: TicketIcon, category: 'User' },
		{ name: 'Break', category: 'Break' },
		{ name: 'Workflows', to: { name: 'workflow.index' }, icon: VariableIcon, category: 'Builder' },
		{ name: 'Forms', to: { name: 'form.index' }, icon: TemplateIcon, category: 'Builder' },
		{ name: 'Integrations', to: { name: 'integration.index' }, icon: CodeIcon, category: 'Builder' },
		{ name: 'Settings', to: { name: 'settings' }, icon: CogIcon, category: 'Builder' },
	];

	export default defineComponent({
		components: {
			Dialog,
			DialogOverlay,
			TransitionChild,
			TransitionRoot,
			MenuIcon,
			SearchIcon,
			XIcon,
			CogIcon,
			BellIcon,
			SpeakerphoneIcon,
			NavigationMenuItem,
			LogoutIcon,
		},
		setup(props, { slots }) {
			const baseStore = useBaseStore();
			const userStore = useUserStore();
			const mobileMainMenuOpen = ref(false);
			const sidePanelOpen = computed(() => {
				if (typeof slots.secondary == 'undefined') {
					return false;
				}
				return baseStore.secondaryPanelOpen;
			});

			return {
				mobileMainMenuOpen,
				toggleSidePanel: () => baseStore.toggleSecondaryPanel(),
				version: 'v' + baseStore.version,
				sidePanelOpen,
				navigation,
				userFullName: userStore.getUserFullName,
				userAvatar: userStore.getUserAvatar,
			};
		},
	});
</script>
