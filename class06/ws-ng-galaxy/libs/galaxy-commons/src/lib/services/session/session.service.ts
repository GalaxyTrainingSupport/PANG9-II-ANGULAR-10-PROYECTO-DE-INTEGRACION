import { Injectable } from '@angular/core';
import { GlxSessionModule } from './session.module';

import { JwtHelperService } from '@auth0/angular-jwt';
import { User } from '../../models/user.model';
import { GlxStorageService } from '../storage/storage.service';

@Injectable({
  providedIn: GlxSessionModule
})
export class GlxSessionService {

  private helper = new JwtHelperService();

  get token(): string {
    const tokenStorage = this.storageService.getToken();
    if(tokenStorage) {
      const isExpired = this.helper.isTokenExpired(tokenStorage);
      return isExpired ? null : tokenStorage;
    }
    return null;
  }

  get isAuthenticated(): boolean {
    return Boolean(this.token);
  }

  get user(): User {
    return this.token ? new User(this.helper.decodeToken(this.token)) : null;
  }

  constructor(private storageService: GlxStorageService) { }

}
