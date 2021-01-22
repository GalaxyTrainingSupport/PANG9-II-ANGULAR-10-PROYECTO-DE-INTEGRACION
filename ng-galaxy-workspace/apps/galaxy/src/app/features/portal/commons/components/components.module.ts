import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WorkshopItemComponent } from './workshop-item/workshop-item.component';
import { MaterialModule } from '../material/material.module';
import { GlxDateModule, GlxDefaultImgModule } from '@galaxy/commons/pipes';

const COMPONENTS = [
  WorkshopItemComponent
];

@NgModule({
  declarations: [...COMPONENTS],
  exports: [...COMPONENTS, MaterialModule],
  imports: [
    CommonModule,
    MaterialModule,
    GlxDefaultImgModule,
    GlxDateModule
  ]
})
export class ComponentsModule { }
