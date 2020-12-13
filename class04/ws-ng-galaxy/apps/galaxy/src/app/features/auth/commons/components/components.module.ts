import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignInFormComponent } from './sign-in-form/sign-in-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatCardModule} from '@angular/material/card';

const COMPONENTS = [
  SignInFormComponent
];

const MATERIAL_MODULES = [
  MatButtonModule,
  MatIconModule,
  MatInputModule,
  MatFormFieldModule,
  MatCardModule
];

const ANGULAR_MODULES = [
  ReactiveFormsModule
];

const LIB_MODULES = [];

@NgModule({
  declarations: [...COMPONENTS],
  exports: [...COMPONENTS],
  imports: [
    ...MATERIAL_MODULES,
    ...ANGULAR_MODULES,
    ...LIB_MODULES,
    CommonModule
  ]
})
export class AuthComponentsModule { }
