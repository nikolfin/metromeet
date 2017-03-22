import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { ProfileComponent } from './components/profile/profile.component';
import { AuthGuard } from './login.service';
import { SignupComponent } from './components/signup/signup.component';
import { EmailComponent } from './components/email/email.component';

export const router: Routes = [
    { path: '', redirectTo: 'login', pathMatch: 'full' },
    { path: 'login', component: LoginComponent },
    { path: 'signup', component: SignupComponent },
    { path: 'login-email', component: EmailComponent },
    { path: 'profile', component: ProfileComponent, canActivate: [AuthGuard] }
]

export const routes: ModuleWithProviders = RouterModule.forRoot(router);