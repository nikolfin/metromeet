import { Injectable } from '@angular/core';
import {
	AngularFire,
	FirebaseObjectObservable,
	FirebaseListObservable,
	AuthMethods,
	AuthProviders
} from 'angularfire2';

// interfaces
import { INewUser, IRegisterData } from '../interfaces/user';

@Injectable()

export class AuthService {

	constructor(private _af: AngularFire) { }

	loginWithProvider(provider: string, loginData?: IRegisterData) {

		let currentProvider: Object;

		switch (provider) {
			case 'fb':
				currentProvider = {
					provider: AuthProviders.Facebook,
					method: AuthMethods.Popup
				};
				break;
			case 'google':
				currentProvider = {
					provider: AuthProviders.Google,
					method: AuthMethods.Popup
				};
				break;
			case 'email':
				currentProvider = {
					provider: AuthProviders.Password,
					method: AuthMethods.Password
				};
				break;
			default:
				null
		}

		return loginData ? this.getAuthState().login(currentProvider) : this.getAuthState().login(loginData, currentProvider);
	}

	getAuthState() {
		return this._af.auth;
	}

	createNewUser(user: IRegisterData) {
		return this._af.auth.createUser(user);
	}
}