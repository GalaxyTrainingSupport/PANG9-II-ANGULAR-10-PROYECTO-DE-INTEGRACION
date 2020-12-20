import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { AuthComponent } from './auth.component';
import { SignInView } from './views/sign-in/sign-in.view';
import { SignUpView } from './views/sign-up/sign-up.view';
import { AuthCommonsModule } from './commons/commons.module';
import { GlxSessionModule } from '@galaxy/commons/services/session/session.module';
import { GlxStorageModule } from '@galaxy/commons/services/storage/storage.module';

@NgModule({
  declarations: [AuthComponent, SignInView, SignUpView],
  imports: [
    CommonModule,
    AuthRoutingModule,
    AuthCommonsModule,
    GlxSessionModule,
    GlxStorageModule
  ]
})
export class AuthModule { }
