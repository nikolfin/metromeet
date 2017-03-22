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
			console.log(formData.value);
			this._authService.createNewUser({
				email: formData.value.email,
				password: formData.value.password
			}).then(success => {
				console.log(success);
				this._router.navigate(['/login']);
			}).catch(error => {
				console.log(error);
			})
		}
	}
}