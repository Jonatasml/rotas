import { Observable } from 'rxjs';
import {
  ActivatedRouteSnapshot,
  CanActivateChild,
  Router,
  RouterStateSnapshot,
} from '@angular/router';
import { Injectable } from '@angular/core';
import { AuthService } from '../login/auth.service';

@Injectable()
export class AlunosGuard implements CanActivateChild {
  constructor(private authService: AuthService, private router: Router) {}
  canActivateChild(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> | boolean {
    console.log('AlunosGuard: Guarda de rota filha');
    if (state.url.includes('editar')) {
      // alert('Usuario sem acesso para editar');
      // return false;
    }
    return true;

    //     if (this.authService.usuarioEstaAutenticado()) {
    //   return true;

    // }
    // this.router.navigate(['/login']);
    // return false;
  }
}
