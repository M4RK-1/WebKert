import { Component } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(public afAuth: AngularFireAuth, private router: Router) {}

  logout() {
    this.afAuth.signOut()
      .then(() => this.router.navigate(['/login']))
      .catch(error => console.error('Logout error:', error));
  }
}
