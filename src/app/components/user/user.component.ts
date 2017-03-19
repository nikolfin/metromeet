import { Component, OnInit, OnDestroy } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { ActivatedRoute } from '@angular/router';
import 'rxjs/add/operator/mergeMap';

@Component({
	selector: 'app-user',
	templateUrl: './user.component.html',
	styleUrls: ['./user.component.css']
})

export class UserComponent implements OnInit {

	user$: any = this._route.params.mergeMap(params => {
			return this._authService.getUser(params['id']);
		});

	constructor(
		private _authService: AuthService,
		private _route: ActivatedRoute
	) { }

	ngOnInit() { }

	ngOnDestroy() {
		this.user$.unsubscribe();
	}
}
