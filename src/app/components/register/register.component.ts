import { Component } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  email: string = '';
  password: string = '';

  constructor(private afAuth: AngularFireAuth, private router: Router) {}

  register() {
    this.afAuth.createUserWithEmailAndPassword(this.email, this.password)
      .then(() => this.router.navigate(['/profile']))
      .catch(error => console.error('Registration error:', error));
  }
}
