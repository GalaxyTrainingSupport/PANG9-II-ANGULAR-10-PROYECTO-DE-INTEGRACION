import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GlxImgPreviewComponent } from './img-preview.component';



@NgModule({
  declarations: [GlxImgPreviewComponent],
  exports: [GlxImgPreviewComponent],
  imports: [
    CommonModule
  ]
})
export class GlxImgPreviewModule { }
