import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})

export class SignupComponent implements OnInit {

	constructor(
		private _authService: AuthService,
		private _router: Router
	) { }

	ngOnInit() {}

	onSubmit(formData) {
		if (formData.valid) {
			this._authService.createNewUser({
				email: formData.value.email,
				password: formData.value.password
			}).then(newUserInfo => {
				if (!newUserInfo.auth.emailVerified) {
					newUserInfo.auth.sendEmailVerification();
				}
				this._router.navigate(['/login']);
			}).catch(error => {
				console.log(error);
			})
		}
	}
}