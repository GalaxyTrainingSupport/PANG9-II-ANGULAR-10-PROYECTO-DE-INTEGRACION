import { Injectable } from '@angular/core';
import { HttpModule } from './http.module';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../../environments/environment';
import { SignInFormData } from '../../interfaces/sign-in-form-data';
import { SignInResponse } from '../../interfaces/sign-in-response';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: HttpModule
})
export class AuthHttp {
  api = environment.api;

  constructor(private http: HttpClient) { }

  signIn(body: SignInFormData): Observable<SignInResponse> {
    return this.http.post<SignInResponse>(`${this.api}/auth/sign-in`, body);
  }
}
