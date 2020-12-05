import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PortalComponentsModule } from './components/components.module';

@NgModule({
  exports: [
    PortalComponentsModule,
  ]
})
export class PortalCommonsModule { }
