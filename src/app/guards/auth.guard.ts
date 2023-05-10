import { Injectable } from '@angular/core';
import { AuthService } from './../login/auth.service';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  CanLoad,
  Route,
  Router,
  RouterStateSnapshot,
} from '@angular/router';
import { Observable } from 'rxjs';

@Injectable()
export class AuthGuard implements CanActivate, CanLoad {
  constructor(private authService: AuthService, private router: Router) {}

  canActivate(
    Route: ActivatedRouteSnapshot,
    State: RouterStateSnapshot
  ): Observable<boolean> | boolean {
    console.log('AuthGuard');
    if (this.authService.usuarioEstaAutenticado()) {
      return true;
    }
    this.router.navigate(['/login']);
    return false;
  }

  private verificarAcesso() {
    if (this.authService.usuarioEstaAutenticado()) {
      return true;
    }
    this.router.navigate(['/login']);
    return false;
  }

  canLoad(route: Route): Observable<boolean> | Promise<boolean> | boolean {
    console.log('canLoad: Verificando se user pode carregar o modolo');
    return this.verificarAcesso();
  }
}
