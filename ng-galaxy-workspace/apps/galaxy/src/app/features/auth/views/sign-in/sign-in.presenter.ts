import { Injectable } from '@angular/core';
import { SignInFormData } from '../../interfaces/sign-in-form-data';
import { AuthHttp } from '../../commons/http/auth.http';
import { GlxSession } from '@galaxy/commons/services';
import { Router } from '@angular/router';

@Injectable()
export class SignInPresenter {

  constructor(
    private authHttp: AuthHttp,
    private session: GlxSession,
    private router: Router
  ) { }

  signIn(data: SignInFormData) {
    console.log(data);
    this.authHttp.signIn(data)
      .subscribe(
        ({ token }) => {
          this.session.create(token);
          this.router.navigateByUrl('/admin');
        }
      );
  }
}
