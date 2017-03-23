import { CanActivate, Router } from '@angular/router';
import { AuthService } from './auth.service';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/take';
import 'rxjs/add/operator/do';

@Injectable()

export class AuthGuard implements CanActivate {

	constructor(
		private _authService: AuthService,
		private _router: Router
	) { }

	canActivate(): Observable<boolean> {
		return this._authService.isLogedIn()
			.take(1)
			.do(allowed => {
				if(!allowed) {
					this._router.navigate(['/login']);
				}
			});
	}
}
