import { Component, OnInit, OnDestroy } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import 'rxjs/add/operator/map';

// interfaces
import { IUser } from '../../interfaces/user';

@Component({
	selector: 'app-home',
	templateUrl: './home.component.html',
	styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {

	isAuth$: any = this._authService.getAuthState().map(authState => authState ? true : false);
	users$: any = this._authService.getUsers();

	constructor(
		private _authService: AuthService
	) { }

	ngOnInit() { }

	login() {
		this._authService.login();
	}
}