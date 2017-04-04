import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
import { AngularFireModule, AuthProviders, AuthMethods } from 'angularfire2';
import { AuthService } from './services/auth.service';
import { AuthGuard } from './services/auth.guard.service';
import { routes } from './app.routes';
import { MdlModule } from 'angular2-mdl';

import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { EmailComponent } from './components/email/email.component';
import { SignupComponent } from './components/signup/signup.component';
import { ProfileComponent } from './components/profile/profile.component';

export const firebaseConfig = {
  apiKey: 'AIzaSyALH6IFYkrYmUUGaREI4jjQ7FeL78fFU58',
  authDomain: 'metromeet-d36a7.firebaseapp.com',
  databaseURL: 'https://metromeet-d36a7.firebaseio.com',
  storageBucket: 'metromeet-d36a7.appspot.com',
  messagingSenderId: '589927416824',
}

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    EmailComponent,
    SignupComponent,
    ProfileComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AngularFireModule.initializeApp(firebaseConfig),
    routes,
    MdlModule
  ],
  providers: [AuthService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
