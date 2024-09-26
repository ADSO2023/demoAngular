import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {
  constructor(
    private authService: AuthService,
    private router: Router) {}

  onLogin(): void {
    this.authService.login('fabiancol@gmail.com', '12345').subscribe(
      user => {
        console.log("logeado", user);

     this.router.navigate(['/']);
   });
  }
}
