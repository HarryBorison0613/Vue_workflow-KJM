<template>
	<PageLayout>
		<StackedPanels>
			<PanelSection>
				<form action="#" method="POST">
					<div>
						<h2 id="payment-details-heading" class="text-lg leading-6 font-medium text-gray-900">Payment details</h2>
						<p class="mt-1 text-sm text-gray-500">Update your billing information. Please note that updating your location could affect your tax rates.</p>
					</div>

					<div class="mt-6 grid grid-cols-4 gap-6">
						<div class="col-span-4 sm:col-span-2">
							<label class="block text-sm font-medium text-gray-700" for="first-name">First name</label>
							<input
								id="first-name"
								autocomplete="cc-given-name"
								class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-gray-900 focus:border-gray-900 sm:text-sm"
								name="first-name"
								type="text"
							/>
						</div>

						<div class="col-span-4 sm:col-span-2">
							<label class="block text-sm font-medium text-gray-700" for="last-name">Last name</label>
							<input
								id="last-name"
								autocomplete="cc-family-name"
								class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-gray-900 focus:border-gray-900 sm:text-sm"
								name="last-name"
								type="text"
							/>
						</div>

						<div class="col-span-4 sm:col-span-2">
							<label class="block text-sm font-medium text-gray-700" for="email-address">Email address</label>
							<input
								id="email-address"
								autocomplete="email"
								class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-gray-900 focus:border-gray-900 sm:text-sm"
								name="email-address"
								type="text"
							/>
						</div>

						<div class="col-span-4 sm:col-span-1">
							<label class="block text-sm font-medium text-gray-700" for="expiration-date">Expration date</label>
							<input
								id="expiration-date"
								autocomplete="cc-exp"
								class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-gray-900 focus:border-gray-900 sm:text-sm"
								name="expiration-date"
								placeholder="MM / YY"
								type="text"
							/>
						</div>

						<div class="col-span-4 sm:col-span-1">
							<label class="flex items-center text-sm font-medium text-gray-700" for="security-code">
								<span>Security code</span>
								<QuestionMarkCircleIcon aria-hidden="true" class="ml-1 flex-shrink-0 h-5 w-5 text-gray-300" />
							</label>
							<input
								id="security-code"
								autocomplete="cc-csc"
								class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-gray-900 focus:border-gray-900 sm:text-sm"
								name="security-code"
								type="text"
							/>
						</div>

						<div class="col-span-4 sm:col-span-2">
							<label class="block text-sm font-medium text-gray-700" for="country">Country / Region</label>
							<select id="country" autocomplete="country" class="mt-1 block w-full bg-white border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-gray-900 focus:border-gray-900 sm:text-sm" name="country">
								<option>United States</option>
								<option>Canada</option>
								<option>Mexico</option>
							</select>
						</div>

						<div class="col-span-4 sm:col-span-2">
							<label class="block text-sm font-medium text-gray-700" for="postal-code">ZIP / Postal</label>
							<input
								id="postal-code"
								autocomplete="postal-code"
								class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-gray-900 focus:border-gray-900 sm:text-sm"
								name="postal-code"
								type="text"
							/>
						</div>
					</div>
				</form>
				<template #footer>
					<div class="px-4 py-3 bg-gray-50 text-right sm:px-6">
						<button
							class="bg-gray-800 border border-transparent rounded-md shadow-sm py-2 px-4 inline-flex justify-center text-sm font-medium text-white hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900"
							type="submit"
						>
							Save
						</button>
					</div>
				</template>
			</PanelSection>
			<PanelSection>
				<div>
					<h2 id="plan-heading" class="text-lg leading-6 font-medium text-gray-900">Plan</h2>
				</div>

				<RadioGroup v-model="selectedPlan" class="mt-6">
					<RadioGroupLabel class="sr-only"> Pricing plans</RadioGroupLabel>
					<div class="relative bg-white rounded-md -space-y-px">
						<RadioGroupOption v-for="(plan, planIdx) in plans" :key="plan.name" v-slot="{ checked, active }" :value="plan" as="template">
							<div
								:class="[
									planIdx === 0 ? 'rounded-tl-md rounded-tr-md' : '',
									planIdx === plans.length - 1 ? 'rounded-bl-md rounded-br-md' : '',
									checked ? 'bg-primary-50 border-primary-200 z-10' : 'border-gray-200',
									'relative border p-4 flex flex-col cursor-pointer md:pl-4 md:pr-6 md:grid md:grid-cols-3 focus:outline-none',
								]"
							>
								<div class="flex items-center text-sm">
									<span
										:class="[checked ? 'bg-primary-500 border-transparent' : 'bg-white border-gray-300', active ? 'ring-2 ring-offset-2 ring-gray-900' : '', 'h-4 w-4 rounded-full border flex items-center justify-center']"
										aria-hidden="true"
									>
										<span class="rounded-full bg-white w-1.5 h-1.5" />
									</span>
									<RadioGroupLabel as="span" class="ml-3 font-medium text-gray-900">{{ plan.name }}</RadioGroupLabel>
								</div>
								<RadioGroupDescription class="ml-6 pl-1 text-sm md:ml-0 md:pl-0 md:text-center">
									<span :class="[checked ? 'text-primary-900' : 'text-gray-900', 'font-medium']">${{ plan.priceMonthly }} / mo</span>
									{{ ' ' }}
									<span :class="checked ? 'text-primary-700' : 'text-gray-500'">(${{ plan.priceYearly }} / yr)</span>
								</RadioGroupDescription>
								<RadioGroupDescription :class="[checked ? 'text-primary-700' : 'text-gray-500', 'ml-6 pl-1 text-sm md:ml-0 md:pl-0 md:text-right']">{{ plan.limit }}</RadioGroupDescription>
							</div>
						</RadioGroupOption>
					</div>
				</RadioGroup>

				<SwitchGroup as="div" class="flex items-center mt-4">
					<Switch
						v-model="annualBillingEnabled"
						:class="[
							annualBillingEnabled ? 'bg-primary-500' : 'bg-gray-200',
							'relative inline-flex flex-shrink-0 h-6 w-11 border-2 border-transparent rounded-full cursor-pointer focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900 transition-colors ease-in-out duration-200',
						]"
					>
						<span :class="[annualBillingEnabled ? 'translate-x-5' : 'translate-x-0', 'inline-block h-5 w-5 rounded-full bg-white shadow transform ring-0 transition ease-in-out duration-200']" aria-hidden="true" />
					</Switch>
					<SwitchLabel as="span" class="ml-3">
						<span class="text-sm font-medium text-gray-900">Annual billing </span>
						<span class="text-sm text-gray-500">(Save 10%)</span>
					</SwitchLabel>
				</SwitchGroup>

				<template #footer>
					<div class="px-4 py-3 bg-gray-50 text-right sm:px-6">
						<button
							class="bg-gray-800 border border-transparent rounded-md shadow-sm py-2 px-4 inline-flex justify-center text-sm font-medium text-white hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900"
							type="submit"
						>
							Save
						</button>
					</div>
				</template>
			</PanelSection>
			<PanelSection :full-width="true">
				<div class="px-4 sm:px-6">
					<h2 id="billing-history-heading" class="text-lg leading-6 font-medium text-gray-900">Billing history</h2>
				</div>
				<div class="mt-6 flex flex-col">
					<div class="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
						<div class="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
							<div class="overflow-hidden border-t border-gray-200">
								<table class="min-w-full divide-y divide-gray-200">
									<thead class="bg-gray-50">
										<tr>
											<th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider" scope="col">Date</th>
											<th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider" scope="col">Description</th>
											<th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider" scope="col">Amount</th>
											<!--
            `relative` is added here due to a weird bug in Safari that causes `sr-only` headings to introduce overflow on the body on mobile.
          -->
											<th class="relative px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider" scope="col">
												<span class="sr-only">View receipt</span>
											</th>
										</tr>
									</thead>
									<tbody class="bg-white divide-y divide-gray-200">
										<tr v-for="payment in payments" :key="payment.id">
											<td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
												<time :datetime="payment.datetime">{{ payment.date }}</time>
											</td>
											<td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
												{{ payment.description }}
											</td>
											<td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
												{{ payment.amount }}
											</td>
											<td class="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
												<a :href="payment.href" class="text-primary-600 hover:text-primary-900">View receipt</a>
											</td>
										</tr>
									</tbody>
								</table>
							</div>
						</div>
					</div>
				</div>
			</PanelSection>
		</StackedPanels>
	</PageLayout>
</template>

<script lang="ts">
	import { defineComponent, ref } from 'vue';
	import { RadioGroup, RadioGroupDescription, RadioGroupLabel, RadioGroupOption, Switch, SwitchGroup, SwitchLabel } from '@headlessui/vue';
	import { QuestionMarkCircleIcon } from '@heroicons/vue/outline';
	import PageLayout from '@layouts/PageLayout.vue';
	import StackedPanels from '@components/StackedPanels.vue';
	import PanelSection from '@components/PanelSection.vue';

	const plans = [
		{ name: 'Startup', priceMonthly: 29, priceYearly: 290, limit: 'Up to 5 active job postings' },
		{ name: 'Business', priceMonthly: 99, priceYearly: 990, limit: 'Up to 25 active job postings' },
		{ name: 'Enterprise', priceMonthly: 249, priceYearly: 2490, limit: 'Unlimited active job postings' },
	];
	const payments = [
		{
			id: 1,
			date: '1/1/2020',
			datetime: '2020-01-01',
			description: 'Business Plan - Annual Billing',
			amount: 'CA$109.00',
			href: '#',
		},
		// More payments...
	];

	export default defineComponent({
		name: 'Billing',
		components: {
			PanelSection,
			StackedPanels,
			PageLayout,
			Switch,
			SwitchGroup,
			SwitchLabel,
			RadioGroup,
			RadioGroupDescription,
			RadioGroupOption,
			RadioGroupLabel,
			QuestionMarkCircleIcon,
		},
		setup() {
			const automaticTimezoneEnabled = ref(true);
			const autoUpdateApplicantDataEnabled = ref(false);
			const selectedPlan = ref(plans[1]);
			const annualBillingEnabled = ref(true);

			return {
				automaticTimezoneEnabled,
				autoUpdateApplicantDataEnabled,
				plans,
				payments,
				selectedPlan,
				annualBillingEnabled,
			};
		},
	});
</script>
