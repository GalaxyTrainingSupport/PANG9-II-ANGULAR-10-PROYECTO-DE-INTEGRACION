import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

const COMPONENTS = [

];

const MATERIAL_MODULES = [
  // MatButtonModule,
  // MatIconModule,
  // MatInputModule,
  // MatFormFieldModule,
  // MatCardModule
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
export class AdminComponentsModule { }
