export type UserProfileName = 'client' | 'admin';

export type UserRoles = string[];

export interface User {
	id: number;
	username: string;
	firstName: string;
	lastName: string;
	fullName: string;
	TZ: string;
	avatar: UserAvatar;
}

export interface UserAvatar {
	url: string;
}
