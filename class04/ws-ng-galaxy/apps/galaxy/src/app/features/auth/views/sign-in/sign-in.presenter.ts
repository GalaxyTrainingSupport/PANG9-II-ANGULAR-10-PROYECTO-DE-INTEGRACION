import { Injectable } from '@angular/core';
import { ISignInFormData } from '../../interfaces/sign-in-form-data';
import { AuthHttp } from '../../commons/http/auth.http';
import { GlxSessionService } from '../../../../../../../../libs/galaxy-commons/src/lib/services/session/session.service';
import { User } from 'libs/galaxy-commons/src/lib/models/user.model';


@Injectable()
export class SignInPresenter {

  user: User;
  constructor(private authHttp: AuthHttp, private sessionService: GlxSessionService) {
  }

  signIn(data: ISignInFormData): void {
    console.log('Data in presenter!!', data);
    this.authHttp.signIn(data).subscribe(response => {
      console.log(response.token);
      localStorage.setItem('signInToken', JSON.stringify(response));
      this.user = this.sessionService.user;
      console.log(this.user);
    })
  }
}
