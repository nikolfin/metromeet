import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

// interfaces
import { IRegisterData } from '../../interfaces/user';

@Component({
    selector: 'app-navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.css']
})

export class NavbarComponent implements OnInit {

    isAuth$: any = this._authService.getAuthState();

    constructor(
        private _authService: AuthService,
        private _router: Router
    ) { }

    ngOnInit() { }

    login() {
        this._authService.login();
    }

    logout() {
    	this._authService.logout();
        this._router.navigate(['']);
    }
}