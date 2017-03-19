import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import 'rxjs/add/operator/map';

@Component({
	selector: 'app-profile',
	templateUrl: './profile.component.html',
	styleUrls: ['./profile.component.css']
})

export class ProfileComponent implements OnInit {

	isAuth: boolean;
	profile$: any;

	constructor(private _authService: AuthService) { }

	ngOnInit() {
		this._authService.getAuthState().subscribe(authState => {
			this.isAuth = authState ? true : false;
			if (this.isAuth) {
				this.profile$ = this._authService.getAuthState().map(authState => authState.facebook);
			}
		});
	}
}