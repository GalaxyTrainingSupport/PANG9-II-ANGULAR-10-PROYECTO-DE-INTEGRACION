import { NgModule } from '@angular/core';
import { ComponentsModule } from './components/components.module';
import { FormsModule } from '@angular/forms';
import { GlxParticipantsHttpModule, GlxWorkshopsHttpModule } from '@galaxy/commons/http';
import { GlxErrorIterceptorModule, GlxTokenInterceptorModule } from '@galaxy/commons/interceptors';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  exports: [
    ComponentsModule,
    FormsModule,

    GlxWorkshopsHttpModule,
    GlxParticipantsHttpModule,
    GlxTokenInterceptorModule,
    GlxErrorIterceptorModule,
    TranslateModule
  ]
})
export class PortalCommonsModule { }
