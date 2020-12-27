import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GlxHeaderComponent } from './header.component';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';



@NgModule({
  declarations: [GlxHeaderComponent],
  exports: [GlxHeaderComponent],
  imports: [
    CommonModule,
    MatIconModule,
    MatButtonModule
  ]
})
export class GlxHeaderModule { }
