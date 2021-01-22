import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { GlxAuthenticationModule } from './authentication.module';
import { GlxSession } from '@galaxy/commons/services';

@Injectable({
  providedIn: GlxAuthenticationModule
})
export class GlxIsAuthenticatedGuard implements CanActivate {

  constructor(
    private session: GlxSession,
    private router: Router
  ) {
  }


  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    /*
    Antes de angular 7
    if (!this.session.isAuthenticated) {
      this.router.navigateByUrl('/auth/sign-in');
    }
    */
    // Desde angular 7
    // this.router.createUrlTree() -> this.router.navigate()
    // this.router.parseUrl() -> this.router.navigateByUrl()

    return this.session.isAuthenticated || this.router.parseUrl('/auth/sign-in');
  }

}
