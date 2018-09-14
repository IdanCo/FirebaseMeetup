import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';

import { auth } from 'firebase';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {

  constructor(public afAuth: AngularFireAuth) { }

  ngOnInit() {
  }

  signIn() {
    this.afAuth.auth.signInWithPopup(new auth.GoogleAuthProvider());
  }

  signOut() {
    this.afAuth.auth.signOut();
  }

}
