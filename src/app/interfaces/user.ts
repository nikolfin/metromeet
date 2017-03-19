export interface IUser {
	_id: string;
	about: string;
	address: string;
	age: number;	
	balance: number;
	email: string;
	eyeColor: string;
	guid: string;
	index: number;
	isActive: boolean;
	latitude: string;
	longitude: string;
	name: {
		first: string;
		last: string;
	};
	phone: string;
	picture: string;
	registered: string;
	tags: string[];
}
export interface IRegisterData {
	email: string;
	password: string
}