import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponentsModule } from './components/components.module';
import { AdminHttpModule } from './http/http.module';

@NgModule({
  exports: [
    AdminComponentsModule, AdminHttpModule
  ]
})
export class AdminCommonsModule { }
