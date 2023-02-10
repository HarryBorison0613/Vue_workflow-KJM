<template>
	<AppLayout>
		<template #primary>
			<Header />
			<div class="max-w-3xl mx-auto grid grid-cols-1 gap-6 sm:px-6 lg:max-w-7xl lg:grid-flow-col-dense lg:grid-cols-3">
				<div class="space-y-6 lg:col-start-1 lg:col-span-2">
					<!-- Description list-->
					<section aria-labelledby="applicant-information-title">
						<div class="bg-white shadow sm:rounded-lg">
							<div class="px-4 py-5 sm:px-6">
								<h2 id="applicant-information-title" class="text-lg leading-6 font-medium text-gray-900">Applicant Information</h2>
								<p class="mt-1 max-w-2xl text-sm text-gray-500">Personal details and application.</p>
							</div>
							<div class="border-t border-gray-200 px-4 py-5 sm:px-6">
								<dl class="grid grid-cols-1 gap-x-4 gap-y-8 sm:grid-cols-2">
									<div class="sm:col-span-1">
										<dt class="text-sm font-medium text-gray-500">Application for</dt>
										<dd class="mt-1 text-sm text-gray-900">Backend Developer</dd>
									</div>
									<div class="sm:col-span-1">
										<dt class="text-sm font-medium text-gray-500">Email address</dt>
										<dd class="mt-1 text-sm text-gray-900">ricardocooper@example.com</dd>
									</div>
									<div class="sm:col-span-1">
										<dt class="text-sm font-medium text-gray-500">Salary expectation</dt>
										<dd class="mt-1 text-sm text-gray-900">$120,000</dd>
									</div>
									<div class="sm:col-span-1">
										<dt class="text-sm font-medium text-gray-500">Phone</dt>
										<dd class="mt-1 text-sm text-gray-900">+1 555-555-5555</dd>
									</div>
									<div class="sm:col-span-2">
										<dt class="text-sm font-medium text-gray-500">About</dt>
										<dd class="mt-1 text-sm text-gray-900">
											Fugiat ipsum ipsum deserunt culpa aute sint do nostrud anim incididunt cillum culpa consequat. Excepteur qui ipsum aliquip consequat sint. Sit id mollit nulla mollit nostrud in ea officia proident. Irure nostrud
											pariatur mollit ad adipisicing reprehenderit deserunt qui eu.
										</dd>
									</div>
									<div class="sm:col-span-2">
										<dt class="text-sm font-medium text-gray-500">Attachments</dt>
										<dd class="mt-1 text-sm text-gray-900">
											<ul class="border border-gray-200 rounded-md divide-y divide-gray-200">
												<li v-for="attachment in attachments" :key="attachment.name" class="pl-3 pr-4 py-3 flex items-center justify-between text-sm">
													<div class="w-0 flex-1 flex items-center">
														<PaperClipIcon aria-hidden="true" class="flex-shrink-0 h-5 w-5 text-gray-400" />
														<span class="ml-2 flex-1 w-0 truncate">
															{{ attachment.name }}
														</span>
													</div>
													<div class="ml-4 flex-shrink-0">
														<a :href="attachment.href" class="font-medium text-blue-600 hover:text-blue-500"> Download </a>
													</div>
												</li>
											</ul>
										</dd>
									</div>
								</dl>
							</div>
							<div>
								<a class="block bg-gray-50 text-sm font-medium text-gray-500 text-center px-4 py-4 hover:text-gray-700 sm:rounded-b-lg" href="#">Read full application</a>
							</div>
						</div>
					</section>

					<!-- Comments-->
					<section aria-labelledby="notes-title">
						<div class="bg-white shadow sm:rounded-lg sm:overflow-hidden">
							<div class="divide-y divide-gray-200">
								<div class="px-4 py-5 sm:px-6">
									<h2 id="notes-title" class="text-lg font-medium text-gray-900">Notes</h2>
								</div>
								<div class="px-4 py-6 sm:px-6">
									<ul class="space-y-8">
										<li v-for="comment in comments" :key="comment.id">
											<div class="flex space-x-3">
												<div class="flex-shrink-0">
													<img :src="`https://images.unsplash.com/photo-${comment.imageId}?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80`" alt="" class="h-10 w-10 rounded-full" />
												</div>
												<div>
													<div class="text-sm">
														<a class="font-medium text-gray-900" href="#">{{ comment.name }}</a>
													</div>
													<div class="mt-1 text-sm text-gray-700">
														<p>{{ comment.body }}</p>
													</div>
													<div class="mt-2 text-sm space-x-2">
														<span class="text-gray-500 font-medium">{{ comment.date }}</span>
														{{ ' ' }}
														<span class="text-gray-500 font-medium">&middot;</span>
														{{ ' ' }}
														<button class="text-gray-900 font-medium" type="button">Reply</button>
													</div>
												</div>
											</div>
										</li>
									</ul>
								</div>
							</div>
							<div class="bg-gray-50 px-4 py-6 sm:px-6">
								<div class="flex space-x-3">
									<div class="flex-shrink-0">
										<img :src="userAvatar" alt="" class="h-10 w-10 rounded-full" />
									</div>
									<div class="min-w-0 flex-1">
										<form action="#">
											<div>
												<label class="sr-only" for="comment">About</label>
												<textarea id="comment" class="shadow-sm block w-full focus:ring-blue-500 focus:border-blue-500 sm:text-sm border border-gray-300 rounded-md" name="comment" placeholder="Add a note" rows="3" />
											</div>
											<div class="mt-3 flex items-center justify-between">
												<a class="group inline-flex items-start text-sm space-x-2 text-gray-500 hover:text-gray-900" href="#">
													<QuestionMarkCircleIcon aria-hidden="true" class="flex-shrink-0 h-5 w-5 text-gray-400 group-hover:text-gray-500" />
													<span> Some HTML is okay. </span>
												</a>
												<button
													class="
														inline-flex
														items-center
														justify-center
														px-4
														py-2
														border border-transparent
														text-sm
														font-medium
														rounded-md
														shadow-sm
														text-white
														bg-blue-600
														hover:bg-blue-700
														focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500
													"
													type="submit"
												>
													Comment
												</button>
											</div>
										</form>
									</div>
								</div>
							</div>
						</div>
					</section>
				</div>

				<section aria-labelledby="timeline-title" class="lg:col-start-3 lg:col-span-1">
					<div class="bg-white px-4 py-4 shadow sm:rounded-t-lg sm:px-6 border-b">
						<h2 id="timeline-title" class="text-lg font-medium text-gray-900">Timeline</h2>
					</div>
					<div class="bg-white px-4 py-4 shadow sm:rounded-b-lg border-t-0 sm:px-6">
						<!-- Activity Feed -->
						<Timeline></Timeline>
					</div>
				</section>
			</div>
		</template>
	</AppLayout>
</template>

<script lang="ts">
	import { defineComponent } from 'vue';

	import { CheckIcon, PaperClipIcon, QuestionMarkCircleIcon, ThumbUpIcon, UserIcon } from '@heroicons/vue/solid';
	import AppLayout from '@layouts/AppLayout.vue';
	import Header from '@modules/ticket/partials/Header.vue';
	import Timeline from '@modules/ticket/partials/Timeline.vue';
	import { useUserStore } from '@modules/user/store';

	const attachments = [
		{ name: 'resume_front_end_developer.pdf', href: '#' },
		{ name: 'coverletter_front_end_developer.pdf', href: '#' },
	];
	const eventTypes = {
		applied: { icon: UserIcon, bgColorClass: 'bg-gray-400' },
		advanced: { icon: ThumbUpIcon, bgColorClass: 'bg-blue-500' },
		completed: { icon: CheckIcon, bgColorClass: 'bg-green-500' },
	};
	const timeline = [
		{
			id: 1,
			type: eventTypes.applied,
			content: 'Applied to',
			target: 'Front End Developer',
			date: 'Sep 20',
			datetime: '2020-09-20',
		},
		{
			id: 2,
			type: eventTypes.advanced,
			content: 'Advanced to phone screening by',
			target: 'Bethany Blake',
			date: 'Sep 22',
			datetime: '2020-09-22',
		},
		{
			id: 3,
			type: eventTypes.completed,
			content: 'Completed phone screening with',
			target: 'Martha Gardner',
			date: 'Sep 28',
			datetime: '2020-09-28',
		},
		{
			id: 4,
			type: eventTypes.advanced,
			content: 'Advanced to interview by',
			target: 'Bethany Blake',
			date: 'Sep 30',
			datetime: '2020-09-30',
		},
		{
			id: 5,
			type: eventTypes.completed,
			content: 'Completed interview with',
			target: 'Katherine Snyder',
			date: 'Oct 4',
			datetime: '2020-10-04',
		},
	];
	const comments = [
		{
			id: 1,
			name: 'Leslie Alexander',
			date: '4d ago',
			imageId: '1494790108377-be9c29b29330',
			body: 'Ducimus quas delectus ad maxime totam doloribus reiciendis ex. Tempore dolorem maiores. Similique voluptatibus tempore non ut.',
		},
		{
			id: 2,
			name: 'Michael Foster',
			date: '4d ago',
			imageId: '1519244703995-f4e0f30006d5',
			body: 'Et ut autem. Voluptatem eum dolores sint necessitatibus quos. Quis eum qui dolorem accusantium voluptas voluptatem ipsum. Quo facere iusto quia accusamus veniam id explicabo et aut.',
		},
		{
			id: 3,
			name: 'Dries Vincent',
			date: '4d ago',
			imageId: '1506794778202-cad84cf45f1d',
			body: 'Expedita consequatur sit ea voluptas quo ipsam recusandae. Ab sint et voluptatem repudiandae voluptatem et eveniet. Nihil quas consequatur autem. Perferendis rerum et.',
		},
	];

	export default defineComponent({
		name: 'Index',
		components: {
			Timeline,
			Header,
			PaperClipIcon,
			QuestionMarkCircleIcon,
			AppLayout,
		},
		setup() {
			const userStore = useUserStore();

			return {
				userFullName: userStore.getUserFullName,
				userAvatar: userStore.getUserAvatar,
				attachments,
				eventTypes,
				timeline,
				comments,
			};
		},
	});
</script>
