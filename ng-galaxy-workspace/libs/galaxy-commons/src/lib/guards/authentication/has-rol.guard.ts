import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { GlxAuthenticationModule } from './authentication.module';
import { GlxSession } from '../../services';
import { UserRol } from '@galaxy/commons/models';

@Injectable({
  providedIn: GlxAuthenticationModule
})
export class GlxHasRolGuard implements CanActivate {
  constructor(
    private session: GlxSession,
    private router: Router,
    ) {
  }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    const rols: UserRol[] = next.data?.rol || [];

    return rols.includes(this.session.user.rol) || this.router.parseUrl('/not-authorized');
  }

}
