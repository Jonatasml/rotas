import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanDeactivate,
  RouterStateSnapshot,
} from '@angular/router';

import { IFormCanDeactivate } from './iform-candeactivate';

@Injectable()
export class AlunosDeactivateGuard
  implements CanDeactivate<IFormCanDeactivate>
{
  canDeactivate(
    component: IFormCanDeactivate,
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> | Promise<boolean> | boolean {
    // console.log('teste');
    // return component.podeMudarRota();
    return component.podeDesativar();
  }
}
