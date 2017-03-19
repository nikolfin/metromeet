import { Injectable } from '@angular/core';
import { AngularFire, FirebaseObjectObservable, FirebaseListObservable } from 'angularfire2';
import 'rxjs/add/operator/mergeMap';

// interfaces
import { IUser, IRegisterData } from '../interfaces/user';

@Injectable()

export class AuthService {

	constructor(private _af: AngularFire) { }

	login() {
		this.getAuthState().login();
	}

	logout() {
		this.getAuthState().logout();
	}

	getUsers() {
		return this._af.database.list('/users') as FirebaseListObservable<IUser[]>
	}

	getUser(id) {
		return this._af.database.object('/users/'+id) as FirebaseObjectObservable<IUser>
	}

	getAuthState() {
		return this._af.auth;
	}
}