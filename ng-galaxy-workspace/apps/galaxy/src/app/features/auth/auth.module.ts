import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { AuthComponent } from './auth.component';
import { AuthCommonsModule } from './commons/commons.module';
import { SignInView } from './views/sign-in/sign-in.view';


@NgModule({
  declarations: [
    AuthComponent,
    SignInView
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    AuthCommonsModule
  ]
})
export class AuthModule { }
