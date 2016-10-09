import { Component } from '@angular/core';
import { AuthData } from '../../providers/auth-data.service';
import { NavController, AlertController, LoadingController } from 'ionic-angular';
import { LoginPage } from "../login/login";

import {
    FirebaseAuth,
    AuthProviders,
    AuthMethods,
    AngularFire,
    FirebaseListObservable,
    FirebaseObjectObservable
} from 'angularfire2';
import { Observable } from 'rxjs/Observable';

@Component({
    selector: 'page-home',
    templateUrl: 'home.html'
})
export class HomePage {

    // Refs
    cows: FirebaseListObservable<any[]>;

    constructor(public navCtrl: NavController,
        public authData: AuthData,
        public af: AngularFire,
        private alertCtrl: AlertController,
        private loadingCtrl: LoadingController) {

        this.cows = this.af.database.list('/cows', {
            query: {
                orderByChild: 'owner',
                equalTo: this.authData.userProfile.id
            }
        });
    }

    logOut() {
        this.authData.logoutUser().then(() => {
            this.navCtrl.setRoot(LoginPage);
        });
    }
}
