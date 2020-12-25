import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { GlxSessionService } from '@galaxy/commons/services';

@Injectable()
export class GlxTokenInterceptor implements HttpInterceptor {

  constructor(private sessionService: GlxSessionService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    if (this.sessionService.isAuthenticated) {
      const requestClone = request.clone({
        setHeaders: {
          Authorization: `Bearer ${this.sessionService.token}`
        }
      });
      return next.handle(requestClone);
    }
    return next.handle(request);
  }
}
