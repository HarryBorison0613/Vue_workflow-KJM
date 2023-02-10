<template>
	<AppLayout>
		<template #primary>
			<div class="flex-1 relative z-0 flex overflow-hidden">
				<div class="flex-1 relative z-0 overflow-y-auto focus:outline-none xl:order-last">
					<h1>Ticket Preview</h1>
				</div>
				<div class="hidden xl:order-first xl:flex xl:flex-col flex-shrink-0 w-3/5 border-r border-gray-200">
					<div class="my-2">
						<PageHeader :center-title="false" :show-breadcrumbs="false" title="Search tickets"></PageHeader>
					</div>
					<!-- Filters -->
					<section aria-labelledby="filter-heading">
						<h2 id="filter-heading" class="sr-only">Filters</h2>

						<div class="relative z-10 bg-white border-t border-b border-gray-200 py-2">
							<div class="max-w-7xl mx-auto px-4 flex items-center justify-between">
								<div class="flex rounded-md shadow-sm w-1/3">
									<div class="relative flex items-stretch flex-grow focus-within:z-10">
										<div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
											<SearchIcon aria-hidden="true" class="h-5 w-5 text-gray-400" />
										</div>
										<input
											id="filter"
											class="focus:ring-primary-500 focus:border-primary-500 block w-full rounded-none rounded-md pl-10 sm:text-sm border-gray-300 placeholder-gray-500 placeholder-opacity-30"
											name="filter"
											placeholder="Enter text filter"
											type="text"
										/>
									</div>
								</div>

								<button class="inline-block text-sm font-medium text-gray-700 hover:text-gray-900 sm:hidden" type="button" @click="open = true">Filters</button>

								<div class="hidden sm:block">
									<div class="flow-root">
										<PopoverGroup class="-mx-4 flex items-center divide-x divide-gray-200">
											<Popover v-for="(section, sectionIdx) in filters" :key="section.name" class="px-3 relative inline-block text-left">
												<PopoverButton class="group inline-flex justify-center text-sm font-medium text-gray-700 hover:text-gray-900">
													<span>{{ section.name }}</span>
													<span v-if="sectionIdx === 0" class="ml-1.5 rounded py-0.5 px-1.5 bg-gray-200 text-xs font-semibold text-gray-700 tabular-nums">4</span>
													<span v-if="sectionIdx === 1" class="ml-1.5 rounded py-0.5 px-1.5 bg-gray-200 text-xs font-semibold text-gray-700 tabular-nums">1</span>
													<span v-if="sectionIdx === 2" class="ml-1.5 rounded py-0.5 px-1.5 bg-gray-200 text-xs font-semibold text-gray-700 tabular-nums">1</span>
													<ChevronDownIcon aria-hidden="true" class="flex-shrink-0 -mr-1 ml-1 h-5 w-5 text-gray-400 group-hover:text-gray-500" />
												</PopoverButton>

												<transition
													enter-active-class="transition ease-out duration-100"
													enter-from-class="transform opacity-0 scale-95"
													enter-to-class="transform opacity-100 scale-100"
													leave-active-class="transition ease-in duration-75"
													leave-from-class="transform opacity-100 scale-100"
													leave-to-class="transform opacity-0 scale-95"
												>
													<PopoverPanel class="origin-top-right absolute right-0 mt-2 bg-white rounded-md shadow-2xl p-4 ring-1 ring-black ring-opacity-5 focus:outline-none z-20">
														<form class="space-y-4 z-20">
															<div v-for="(option, optionIdx) in section.options" :key="option.value" class="flex items-center z-20">
																<input
																	:id="`filter-${section.id}-${optionIdx}`"
																	:checked="option.checked"
																	:name="`${section.id}[]`"
																	:value="option.value"
																	class="h-4 w-4 border-gray-300 rounded text-primary-600 focus:ring-primary-500"
																	type="checkbox"
																/>
																<label :for="`filter-${section.id}-${optionIdx}`" class="ml-3 pr-6 text-sm font-medium text-gray-900 whitespace-nowrap">
																	{{ option.label }}
																</label>
															</div>
														</form>
													</PopoverPanel>
												</transition>
											</Popover>
										</PopoverGroup>
									</div>
								</div>
							</div>
						</div>

						<!-- Active filters -->
						<div class="bg-gray-100">
							<div class="max-w-7xl mx-auto py-2 px-4 sm:flex sm:items-center">
								<Menu as="div" class="relative inline-block text-left flex-initial">
									<div>
										<MenuButton class="group inline-flex justify-center text-sm font-medium text-gray-700 hover:text-gray-900">
											<h3 class="text-xs font-semibold uppercase tracking-wide text-gray-500">Sort by: {{ currentSortOption.name }}</h3>
											<ChevronDownIcon aria-hidden="true" class="flex-shrink-0 -mr-1 ml-0 -mt-0.5 h-5 w-5 text-gray-400 group-hover:text-gray-500" />
										</MenuButton>
									</div>

									<transition
										enter-active-class="transition ease-out duration-100"
										enter-from-class="transform opacity-0 scale-95"
										enter-to-class="transform opacity-100 scale-100"
										leave-active-class="transition ease-in duration-75"
										leave-from-class="transform opacity-100 scale-100"
										leave-to-class="transform opacity-0 scale-95"
									>
										<MenuItems class="z-10 origin-top-left absolute left-0 mt-2 w-40 rounded-md shadow-2xl bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
											<div class="py-1">
												<MenuItem v-for="option in sortOptions" :key="option.name" v-slot="{ active }">
													<a :class="[option.current ? 'font-medium text-gray-900' : 'text-gray-500', active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm']" :href="option.href">
														{{ option.name }}
													</a>
												</MenuItem>
											</div>
										</MenuItems>
									</transition>
								</Menu>

								<div class="flex-auto inline-block relative flex justify-end items-center">
									<div class="mt-2 sm:mt-0 sm:ml-4">
										<div class="-m-1 flex flex-wrap items-center">
											<span v-for="activeFilter in activeFilters" :key="activeFilter.value" class="m-1 inline-flex rounded-full border border-gray-200 items-center py-1 pl-3 pr-2 text-sm font-normal bg-white text-gray-900">
												<span>{{ activeFilter.label }}</span>
												<button class="flex-shrink-0 ml-1 h-4 w-4 p-1 rounded-full inline-flex text-gray-400 hover:bg-gray-200 hover:text-gray-500" type="button">
													<span class="sr-only">Remove filter for {{ activeFilter.label }}</span>
													<svg class="h-2 w-2" fill="none" stroke="currentColor" viewBox="0 0 8 8">
														<path d="M1 1l6 6m0-6L1 7" stroke-linecap="round" stroke-width="1.5" />
													</svg>
												</button>
											</span>
										</div>
									</div>
									<div aria-hidden="true" class="hidden w-px h-5 bg-gray-300 sm:block sm:ml-2" />
									<h3 class="text-xs font-semibold uppercase tracking-wide text-gray-500 ml-3">Active Filters</h3>
								</div>
							</div>
						</div>
					</section>

					<div aria-hidden="true" class="inset-0 flex items-center bg-white">
						<div class="w-full border-t border-gray-300" />
					</div>

					<!-- Directory list -->
					<nav aria-label="Directory" class="flex-1 min-h-0 overflow-y-auto">
						<div v-for="ticketType in Object.keys(tickets)" :key="ticketType" class="relative">
							<div class="sticky top-0 border-t border-b border-gray-200 bg-gray-50 px-6 py-1 text-sm font-medium text-gray-500">
								<h3>{{ ticketType }}</h3>
							</div>
							<ul class="relative divide-y divide-gray-200">
								<li v-for="ticket in tickets[ticketType]" :key="ticket.id">
									<div class="relative px-6 py-5 flex items-center space-x-3 hover:bg-gray-50 focus-within:ring-2 focus-within:ring-inset focus-within:ring-pink-500">
										<div class="flex-shrink-0">
											<img :src="ticket.imageUrl" alt="" class="h-10 w-10 rounded-full" />
										</div>
										<div class="flex-1 min-w-0">
											<a class="focus:outline-none" href="#">
												<!-- Extend touch target to entire panel -->
												<span aria-hidden="true" class="absolute inset-0" />
												<p class="text-sm font-medium text-gray-900">TICKET#{{ ticket.id }} - {{ ticket.name }}</p>
												<p class="text-sm text-gray-500 truncate">
													{{ ticket.role }}
												</p>
											</a>
										</div>
									</div>
								</li>
							</ul>
						</div>
					</nav>
				</div>
			</div>
		</template>
	</AppLayout>
</template>

<script lang="ts">
	import { computed, defineComponent, ref } from 'vue';
	import AppLayout from '@layouts/AppLayout.vue';
	import { CalendarIcon, CogIcon, HomeIcon, MapIcon, SearchCircleIcon, SpeakerphoneIcon, UserGroupIcon, ViewGridAddIcon } from '@heroicons/vue/outline';
	import { ChevronDownIcon, SearchIcon } from '@heroicons/vue/solid';
	import { Menu, MenuButton, MenuItem, MenuItems, Popover, PopoverButton, PopoverGroup, PopoverPanel } from '@headlessui/vue';
	import PageHeader from '@components/PageHeader.vue';

	const user = {
		name: 'Tom Cook',
		imageUrl: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
	};
	const navigation = [
		{ name: 'Dashboard', href: '#', icon: HomeIcon, current: true },
		{ name: 'Calendar', href: '#', icon: CalendarIcon, current: false },
		{ name: 'Teams', href: '#', icon: UserGroupIcon, current: false },
		{ name: 'Directory', href: '#', icon: SearchCircleIcon, current: false },
		{ name: 'Announcements', href: '#', icon: SpeakerphoneIcon, current: false },
		{ name: 'Office Map', href: '#', icon: MapIcon, current: false },
	];
	const secondaryNavigation = [
		{ name: 'Apps', href: '#', icon: ViewGridAddIcon },
		{ name: 'Settings', href: '#', icon: CogIcon },
	];
	const tabs = [
		{ name: 'Profile', href: '#', current: true },
		{ name: 'Calendar', href: '#', current: false },
		{ name: 'Recognition', href: '#', current: false },
	];
	const profile = {
		name: 'Ricardo Cooper',
		imageUrl: 'https://images.unsplash.com/photo-1463453091185-61582044d556?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80',
		coverImageUrl: 'https://images.unsplash.com/photo-1444628838545-ac4016a5418a?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
		about: `
    <p>Tincidunt quam neque in cursus viverra orci, dapibus nec tristique. Nullam ut sit dolor consectetur urna, dui cras nec sed. Cursus risus congue arcu aenean posuere aliquam.</p>
    <p>Et vivamus lorem pulvinar nascetur non. Pulvinar a sed platea rhoncus ac mauris amet. Urna, sem pretium sit pretium urna, senectus vitae. Scelerisque fermentum, cursus felis dui suspendisse velit pharetra. Augue et duis cursus maecenas eget quam lectus. Accumsan vitae nascetur pharetra rhoncus praesent dictum risus suspendisse.</p>
  `,
		fields: {
			Phone: '(555) 123-4567',
			Email: 'ricardocooper@example.com',
			Title: 'Senior Front-End Developer',
			Team: 'Product Development',
			Location: 'San Francisco',
			Sits: 'Oasis, 4th floor',
			Salary: '$145,000',
			Birthday: 'June 8, 1990',
		},
	};

	const tickets = {
		Technical: [
			{
				id: 1,
				name: 'Internet has been offline for 3 days',
				role: 'Account: Brennan IT, Created by: Janine Comber',
				imageUrl: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
			},
			{
				id: 2,
				name: 'Phone calls dropping out',
				role: 'Account: NetStrategy, Created by: NetStrategy support',
				imageUrl: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
			},
		],
		Billing: [
			{
				id: 5,
				name: 'Angela Beaver',
				role: 'Chief Strategy Officer',
				imageUrl: 'https://images.unsplash.com/photo-1501031170107-cfd33f0cbdcc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
			},
		],
		Accounting: [
			{
				id: 8,
				name: 'Jeffrey Clark',
				role: 'Senior Art Director',
				imageUrl: 'https://images.unsplash.com/photo-1517070208541-6ddc4d3efbcb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
			},
		],
		Internal: [
			{
				id: 10,
				name: 'Alicia Edwards',
				role: 'Junior Copywriter',
				imageUrl: 'https://images.unsplash.com/photo-1509783236416-c9ad59bae472?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
			},
		],
		General: [
			{
				id: 14,
				name: 'Michael Gillard',
				role: 'Co-Founder / CTO',
				imageUrl: 'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
			},
		],
	};
	const team = [
		{
			name: 'Leslie Alexander',
			handle: 'lesliealexander',
			role: 'Co-Founder / CEO',
			imageUrl: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
		},
		{
			name: 'Michael Foster',
			handle: 'michaelfoster',
			role: 'Co-Founder / CTO',
			imageUrl: 'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
		},
		{
			name: 'Dries Vincent',
			handle: 'driesvincent',
			role: 'Manager, Business Relations',
			imageUrl: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
		},
		{
			name: 'Lindsay Walton',
			handle: 'lindsaywalton',
			role: 'Front-end Developer',
			imageUrl: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
		},
	];
	const sortOptions = [
		{ name: 'Most Popular', href: '#', current: true },
		{ name: 'Best Rating', href: '#', current: false },
		{ name: 'Newest', href: '#', current: false },
	];
	const filters = [
		{
			id: 'status',
			name: 'Status',
			options: [
				{ value: 'all', label: 'All status', checked: false },
				{ value: 'open', label: 'Open', checked: true },
				{ value: 'rejected', label: 'Rejected', checked: true },
				{ value: 'pending', label: 'Pending', checked: true },
				{ value: 'hold', label: 'On Hold', checked: true },
				{ value: 'resolved', label: 'Resolved', checked: false },
				{ value: 'closed', label: 'Closed', checked: false },
			],
		},
		{
			id: 'assigned',
			name: 'Assigned to',
			options: [
				{ value: 'user_id:0', label: 'The Earl of Sandwich (me)', checked: true },
				{ value: 'user_id:1', label: 'Steven White', checked: false },
				{ value: 'user_id:2', label: 'Eric Heyde', checked: false },
				{ value: 'user_id:3', label: 'Gavin Belson', checked: false },
			],
		},
		{
			id: 'type',
			name: 'Type',
			options: [
				{ value: 'technical', label: 'Technical', checked: true },
				{ value: 'provisioning', label: 'Provisioning', checked: false },
				{ value: 'accounting', label: 'Accounting', checked: false },
				{ value: 'sales', label: 'Sales', checked: false },
				{ value: 'outage', label: 'Outage', checked: false },
				{ value: 'undetermined', label: 'Undetermined', checked: false },
			],
		},
	];
	const activeFilters = [
		{ value: 'status', label: 'Status: Open, Rejected, Pending, On Hold' },
		{ value: 'assigned', label: 'Assigned To: (me)' },
		{ value: 'type', label: 'Type: Technical' },
	];

	export default defineComponent({
		name: 'TicketIndex',
		components: {
			PageHeader,
			AppLayout,
			Menu,
			MenuButton,
			MenuItem,
			MenuItems,
			Popover,
			PopoverButton,
			PopoverGroup,
			PopoverPanel,
			ChevronDownIcon,
			SearchIcon,
		},
		setup() {
			const sidebarOpen = ref(false);
			const open = ref(false);
			const currentSortOption = computed(() => {
				for (const option in sortOptions) {
					if (sortOptions[option].current) {
						return sortOptions[option];
					}
				}
				return { name: 'None' };
			});

			return {
				user,
				navigation,
				secondaryNavigation,
				tabs,
				profile,
				tickets,
				team,
				sidebarOpen,
				sortOptions,
				filters,
				activeFilters,
				open,
				currentSortOption,
			};
		},
	});
</script>
