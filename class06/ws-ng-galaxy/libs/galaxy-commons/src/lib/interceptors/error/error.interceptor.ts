import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators'

@Injectable()
export class GlxErrorInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    return next.handle(request).pipe(
      catchError((error: HttpErrorResponse) => {
        // if (error.status === 401) {
        //   this.router.navigatByUrl('sign-in');
        // } else if (error.status === 403) {
        //   this.sessionService.refresToken();
        // }
        const message = 'Ocurrió un error en el servidor';
        console.log(message);
        return throwError(error);
      })
    );
  }
}
