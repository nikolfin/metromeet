import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

import { INewUser } from '../../interfaces/user';

@Component({
	selector: 'app-profile',
	templateUrl: './profile.component.html',
	styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

	name: string;
	email: string;

	constructor(
		private _authService: AuthService,
		private _router: Router
	) { }

	ngOnInit() {
		this._authService.getAuthState().subscribe(authState => {
			if (authState) {
				this.name = authState.auth.displayName;
				this.email = authState.auth.email;

				let newUser : INewUser = {
					uid: authState.uid,
					name: authState.auth.displayName,
					photo: authState.auth.photoURL,
					email: authState.auth.email
				}

				this._authService
					.referenceToUserItem('users/' + authState.uid).set(newUser);
			}
		})
	}

	logout() {
		this._authService.getAuthState().logout();
		console.log('logout');
		this._router.navigateByUrl('/login');
	}
}
