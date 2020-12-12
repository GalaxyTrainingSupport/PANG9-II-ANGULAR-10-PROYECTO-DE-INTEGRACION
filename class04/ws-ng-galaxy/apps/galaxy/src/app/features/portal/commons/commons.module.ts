import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PortalComponentsModule } from './components/components.module';
import { PortalHttpModule } from './http/http.module';

@NgModule({
  exports: [
    PortalComponentsModule,
    PortalHttpModule
  ]
})
export class PortalCommonsModule { }
