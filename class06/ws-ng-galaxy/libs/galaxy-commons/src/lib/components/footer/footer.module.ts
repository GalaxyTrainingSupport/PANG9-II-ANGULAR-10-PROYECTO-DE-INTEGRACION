import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GlxFooterComponent } from './footer.component';



@NgModule({
  declarations: [GlxFooterComponent],
  exports: [GlxFooterComponent],
  imports: [
    CommonModule
  ]
})
export class GlxFooterModule { }
