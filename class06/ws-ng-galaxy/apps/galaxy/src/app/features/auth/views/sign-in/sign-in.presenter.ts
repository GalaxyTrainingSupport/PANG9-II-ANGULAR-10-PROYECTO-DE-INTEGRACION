import { Injectable } from '@angular/core';
import { ISignInFormData } from '../../interfaces/sign-in-form-data';
import { AuthHttp } from '../../commons/http/auth.http';
import { User } from 'libs/galaxy-commons/src/lib/models/user.model';
import { GlxSessionService } from '@galaxy/commons/services/session/session.service';
import { GlxStorageService } from '@galaxy/commons/services/storage/storage.service';
import { Router } from '@angular/router';

@Injectable()
export class SignInPresenter {

  user: User;
  constructor(
    private authHttp: AuthHttp,
    private sessionService: GlxSessionService,
    private storageService: GlxStorageService,
    private router: Router
  ) {}

  signIn(data: ISignInFormData): void {
    // console.log('Data in presenter!!', data);
    this.authHttp.signIn(data).subscribe(response => {
      console.log(response.token);
      // localStorage.setItem('signInToken', JSON.stringify(response));
      this.storageService.setToken(JSON.stringify(response));
      this.user = this.sessionService.user;
      if (this.user) {
        this.router.navigateByUrl('admin');
      }
      console.log(this.user);
    })
  }
}
