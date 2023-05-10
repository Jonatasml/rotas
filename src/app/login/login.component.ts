import { Usuario } from './usuario';
import { Component } from '@angular/core';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  usuario: Usuario = new Usuario();

  constructor(private authService: AuthService) {}

  fazerLogin() {
    this.authService.fazerLogin(this.usuario);
  }
}
