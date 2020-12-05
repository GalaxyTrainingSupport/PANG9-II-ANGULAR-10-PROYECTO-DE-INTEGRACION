import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WorkshopItemComponent } from './workshop-item/workshop-item.component';

const COMPONENTS = [
  WorkshopItemComponent
];

const MATERIAL_MODULES = [
  // MatCardModule
];

const ANGULAR_MODULES = [
  CommonModule,
];

const LIB_MODULES = [];

@NgModule({
  declarations: COMPONENTS,
  exports: COMPONENTS,
  imports: [
    ...ANGULAR_MODULES,
    ...MATERIAL_MODULES,
    ...LIB_MODULES,
  ],
})
export class PortalComponentsModule { }
