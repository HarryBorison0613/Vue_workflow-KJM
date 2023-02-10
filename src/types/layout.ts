import { LocationAsRelativeRaw } from 'vue-router';

export interface NavigationMenuItemType {
	name?: string;
	to?: LocationAsRelativeRaw;
	// eslint-disable-next-line @typescript-eslint/ban-types
	icon?: Function;
	category: string;
}

export interface HeaderNavigationTab {
	name?: string;
	to?: LocationAsRelativeRaw;
	// eslint-disable-next-line @typescript-eslint/ban-types
	icon?: Function;
	selected?: boolean;
}

export interface PageHeaderTags {
	tags: PageHeaderTag[];
}

export interface PageHeaderTag {
	label: string;
	class?: string;
	// eslint-disable-next-line @typescript-eslint/ban-types
	icon?: Function;
	iconClass?: string;
}
