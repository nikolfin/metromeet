import { CanActivate, Router } from '@angular/router';
import { AngularFireAuth } from 'angularfire2/angularfire2';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/take';

@Injectable()
export class AuthGuard implements CanActivate {

	constructor(private _auth: AngularFireAuth, private _router: Router) { }

	canActivate(): Observable<boolean> {
		return Observable.from(this._auth)
			.take(1)
			.map(state => !!state)
			.do(authenticated => {
				if (!authenticated) {
				 	this._router.navigate(['/login']);
				 }
			})
	}
}
