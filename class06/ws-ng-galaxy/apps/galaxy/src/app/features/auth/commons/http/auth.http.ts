import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { environment } from '../../../../../environments/environment';
import { AuthHttpModule } from './http.module';
import { ISignInFormData } from '../../interfaces/sign-in-form-data';
import { ISignInResponse } from '../../interfaces/sign-in-response';

@Injectable({
  providedIn: AuthHttpModule
})
export class AuthHttp {

  api = environment.api;

  constructor(private http: HttpClient) { }

  signIn(body: ISignInFormData): Observable<ISignInResponse> {
    return this.http.post<ISignInResponse>(`${this.api}/auth/sign-in`, body);
  }
}
