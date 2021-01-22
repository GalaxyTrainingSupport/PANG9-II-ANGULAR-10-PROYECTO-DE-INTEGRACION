import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { GlxSession } from '../../services';

@Injectable()
export class GlxTokenInterceptor implements HttpInterceptor {

  constructor(private session: GlxSession) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {

    if (this.session.isAuthenticated) {
      const requestClone = request.clone({
        setHeaders: {
          Authorization: `Bearer ${this.session.token}`
        }
      });

      return next.handle(requestClone);
    }

    return next.handle(request);
  }
}
