import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-email',
  templateUrl: './email.component.html',
  styleUrls: ['./email.component.css']
})
export class EmailComponent implements OnInit {

	constructor(
		private _authService: AuthService,
		private _router: Router
	) { }

	ngOnInit() {
		this._authService.isLogedIn().subscribe(isLogedIn => {
			if (isLogedIn) this._router.navigateByUrl('/profile');
		})
	}

	onSubmit(formData) {
		if (formData.valid) {
			this._authService.loginWithProvider('email', {
				email: formData.value.email,
				password: formData.value.password
			}).then(success => {
				this._router.navigate(['/login']);
			}).catch(error => {
				console.log(error);
			})
		}
	}
}
