import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GlxSessionModule } from '@galaxy/commons/services';
import { HTTP_INTERCEPTORS } from '@angular/common/http';

import { GlxTokenInterceptor } from './token.interceptor';

@NgModule({
  imports: [GlxSessionModule],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: GlxTokenInterceptor,
      multi: true
    }
  ]
})
export class GlxTokenModule { }
