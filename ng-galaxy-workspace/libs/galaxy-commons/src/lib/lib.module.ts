import { NgModule } from '@angular/core';
import { GlxSessionModule, GlxThemeModule } from './services';
import { GlxAuthenticationModule } from './guards';

@NgModule({
  exports: [
    GlxThemeModule,
    GlxSessionModule,
    GlxAuthenticationModule
  ]
})
export class GlxCommonsModule { }
