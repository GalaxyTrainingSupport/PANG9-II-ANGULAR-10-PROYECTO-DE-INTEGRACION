import { NgModule } from '@angular/core';
import { MaterialModule } from './material/material.module';
import { ComponentsModule } from './components/components.module';
import { GlxWorkshopsHttpModule } from '@galaxy/commons/http';
import { HttpModule } from './http/http.module';
import { GlxLoadingModule } from '@galaxy/commons/components';
import { GlxErrorIterceptorModule, GlxTokenInterceptorModule } from '@galaxy/commons/interceptors';

@NgModule({
  exports: [
    MaterialModule,
    ComponentsModule,
    HttpModule,

    GlxWorkshopsHttpModule,
    GlxLoadingModule,
    GlxErrorIterceptorModule,
    GlxTokenInterceptorModule
  ]
})
export class AdminCommonsModule { }
