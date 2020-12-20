import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PortalComponentsModule } from './components/components.module';
import { PortalHttpModule } from './http/http.module';
import { GlxTokenModule } from '@galaxy/commons/interceptors/token/token.module';

@NgModule({
  exports: [
    PortalComponentsModule,
    PortalHttpModule,
    // GlxTokenModule
  ]
})
export class PortalCommonsModule { }
