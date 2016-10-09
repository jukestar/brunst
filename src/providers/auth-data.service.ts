import { Injectable, Inject } from "@angular/core";

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/fromPromise';

import {
    FirebaseAuth,
    AngularFireAuth, 
    AuthProviders,
    AuthMethods,
    AngularFire,
    FirebaseApp,
    FirebaseListObservable,
    FirebaseObjectObservable
} from "angularfire2";

@Injectable()
export class AuthData {
    
    public userProfile: any
    public auth: any;
    firebaseAuth: AngularFireAuth;

    constructor(public af: AngularFire,
        private _auth: FirebaseAuth,  
        @Inject(FirebaseApp) firebaseApp: any) { 

        this.firebaseAuth = af.auth;
        this.auth = firebaseApp.auth()
    }

    signupUser(email: string, password: string): any {
    
    
        return this.auth.createUserWithEmailAndPassword(email, password)
            .then((newUser) => {
                 this.userProfile = {email: email, id: newUser.uid};
            });
    }

    loginUser(email: string, password: string): any {
        return this._auth.login({email, password}, {
            provider: AuthProviders.Password,
            method: AuthMethods.Password
        }).then((newUser) => {
            this.userProfile = {email: email, id: newUser.uid};
        });
    }

    logoutUser(): any {
        return this.auth.signOut();
    }

    resetPassword(email: string): any {
        return this.auth.sendPasswordResetEmail(email);
    } 
}