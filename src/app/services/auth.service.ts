import { Injectable } from '@angular/core';
import {
	AngularFire,
	FirebaseObjectObservable,
	FirebaseListObservable,
	AuthMethods,
	AuthProviders
} from 'angularfire2';
import 'rxjs/add/operator/map';

// interfaces
import { IRegisterData, INewUser } from '../interfaces/user';

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
		}

		return loginData ? 
			this.getAuthState().login(loginData, currentProvider) : 
			this.getAuthState().login(currentProvider);
	}

	getAuthState() {
		return this._af.auth;
	}

	isLogedIn() {
		return this.getAuthState()
			.map(authState => authState ? true : false);
	}

	createNewUser(user: IRegisterData) {
		return this._af.auth.createUser(user);
	}

	referenceToUserItem(pathToUser : string) : FirebaseObjectObservable<INewUser> {
		return this._af.database.object(pathToUser);
	}
}