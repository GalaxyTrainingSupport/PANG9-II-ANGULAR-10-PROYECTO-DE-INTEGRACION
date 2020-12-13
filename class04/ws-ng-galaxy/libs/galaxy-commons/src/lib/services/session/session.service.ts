import { Injectable } from '@angular/core';
import { GlxSessionModule } from './session.module';

import { JwtHelperService } from '@auth0/angular-jwt';
import { IUser } from '../../interfaces/user.interface';
import { User } from '../../models/user.model';

@Injectable({
  providedIn: GlxSessionModule
})
export class GlxSessionService {

  get token(): string {
    return localStorage.getItem('signInToken');
  }

  private helper = new JwtHelperService();

  get user(): User {
    return this.token ? new User(this.helper.decodeToken(this.token)) : null;
  }

  constructor() { }
}
