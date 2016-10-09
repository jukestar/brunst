import { NgModule } from '@angular/core';
import { IonicApp, IonicModule } from 'ionic-angular';
import { AngularFireModule } from "angularfire2";

import { MyApp } from "./app.component";
import { HomePage } from "../pages/home/home";
import { LoginPage } from "../pages/login/login";
import { ResetPasswordPage } from "../pages/reset-password/reset-password";
import { SignupPage } from "../pages/signup/signup";
// Import providers
import { AuthData } from '../providers/auth-data.service';

export const firebaseConfig = {
    apiKey: "AIzaSyACHtrUg1MX6fPGIuKsxMuXreMvXtDuMNs",
    authDomain: "cow-project-bbb56.firebaseapp.com",
    databaseURL: "https://cow-project-bbb56.firebaseio.com",
    storageBucket: "cow-project-bbb56.appspot.com"
};

@NgModule({
    declarations: [
        MyApp,
        HomePage,
        LoginPage,
        ResetPasswordPage,
        SignupPage
    ],
    imports: [
        IonicModule.forRoot(MyApp),
        AngularFireModule.initializeApp(firebaseConfig)
    ],
    bootstrap: [IonicApp],
    entryComponents: [
        MyApp,
        HomePage,
        LoginPage,
        ResetPasswordPage,
        SignupPage
    ],
    providers: [AuthData]
})
export class AppModule { }
