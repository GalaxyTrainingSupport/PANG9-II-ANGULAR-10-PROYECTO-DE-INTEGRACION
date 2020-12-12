import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatChipsModule } from '@angular/material/chips';

import { WorkshopItemComponent } from './workshop-item/workshop-item.component';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';

const COMPONENTS = [
  WorkshopItemComponent
];

const MATERIAL_MODULES = [
  MatChipsModule,
  MatIconModule,
  MatButtonModule
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
