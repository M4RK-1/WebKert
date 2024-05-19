import { Component } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  email: string = '';
  password: string = '';

  constructor(private afAuth: AngularFireAuth, private router: Router) {}

  login() {
    this.afAuth.signInWithEmailAndPassword(this.email, this.password)
      .then(() => this.router.navigate(['/profile']))
      .catch(error => console.error('Login error:', error));
  }

  logout() {
    this.afAuth.signOut()
      .then(() => this.router.navigate(['/login']))
      .catch(error => console.error('Logout error:', error));
  }
}
