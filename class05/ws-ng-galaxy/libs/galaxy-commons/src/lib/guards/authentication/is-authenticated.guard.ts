import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { GlxSessionService } from '@galaxy/commons/services';
import { Observable } from 'rxjs';
import { GlxAuthenticationModule } from './authentication.module';

@Injectable({
  providedIn: GlxAuthenticationModule
})
export class GlxIsAuthenticatedGuard implements CanActivate {

  constructor(private sessionService: GlxSessionService, private router: Router) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.sessionService.isAuthenticated || this.router.parseUrl('/auth/sign-in');
  }

}
