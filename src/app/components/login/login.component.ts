// login.component.ts
import { Component } from '@angular/core';
import { AuthService } from '../../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html', // referenciando
  styleUrls: ['./login.component.css'],
})

export class LoginComponent {
  username = 'admin';
  password = '123';

  constructor(private authService: AuthService, private router: Router) {}

  login(): void {
    this.authService.login(this.username, this.password).subscribe((isLoggedIn) => {
      if (isLoggedIn) {
        this.router.navigate(['edicao-produtos']);
        alert('Sucesso');
      } else {
        
        alert('Falha de login');
      }
    });
  }
}