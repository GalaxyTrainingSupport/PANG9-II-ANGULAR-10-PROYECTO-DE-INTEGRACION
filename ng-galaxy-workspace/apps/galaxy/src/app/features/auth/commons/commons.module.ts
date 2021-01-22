import { NgModule } from '@angular/core';
import { MaterialModule } from './material/material.module';
import { ComponentsModule } from './components/components.module';
import { HttpModule } from './http/http.module';
import { GlxErrorIterceptorModule } from '@galaxy/commons/interceptors';

@NgModule({
  exports: [
    MaterialModule,
    ComponentsModule,
    HttpModule,

    GlxErrorIterceptorModule,
  ]
})
export class AuthCommonsModule { }
