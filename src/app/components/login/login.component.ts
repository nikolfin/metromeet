import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

	constructor(
		private _authService: AuthService,
		private _router: Router
	) { }

	ngOnInit() {
		this._authService.isLogedIn().subscribe(isLogedIn => {
			if (isLogedIn) this._router.navigateByUrl('/profile');
		})
	}

	loginWith(provider: string) {
		this._authService.loginWithProvider(provider).then(
			(success) => {
				this._router.navigate(['/profile']);
			},
			(error) => {
				console.log(error);
			}
		);
	}
}
