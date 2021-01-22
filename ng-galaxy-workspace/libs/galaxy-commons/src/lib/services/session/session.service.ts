import { Injectable } from '@angular/core';
import { GlxSessionModule } from './session.module';
import { GlxLocalStorage } from '../local-storage/local-storage.service';

import { JwtHelperService } from '@auth0/angular-jwt';
import { User } from '../../models';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: GlxSessionModule
})
export class GlxSession {
  private helper = new JwtHelperService();
  private tokenKey = 'token';
  public onSessionClose: Subject<void> = new Subject<void>();

  set token(value: string) {
    this.localStorage.setItem(this.tokenKey, value);
  }

  get token() {
    const tokenStored = this.localStorage.getItem(this.tokenKey);
    if (tokenStored) {
      const isExpired = this.helper.isTokenExpired(tokenStored);
      return isExpired ? null : tokenStored;
    }
    return null;
  }

  get user(): User {
    return this.token ? new User(this.helper.decodeToken(this.token)) : null;
  }

  get isAuthenticated(): boolean {
    return Boolean(this.token);
  }

  constructor(private localStorage: GlxLocalStorage) { }

  create(token: string) {
    this.token = token;
    console.log(this.user);
  }

  destroy() {
    this.localStorage.removeItem(this.tokenKey);
    this.onSessionClose.next();
  }
}
