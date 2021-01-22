import { NgModule } from '@angular/core';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { GlxTokenInterceptor } from './token.interceptor';
import { GlxSessionModule } from '../../services';

@NgModule({
  imports: [
    GlxSessionModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: GlxTokenInterceptor,
      multi: true
    }
  ]
})
export class GlxTokenInterceptorModule { }
