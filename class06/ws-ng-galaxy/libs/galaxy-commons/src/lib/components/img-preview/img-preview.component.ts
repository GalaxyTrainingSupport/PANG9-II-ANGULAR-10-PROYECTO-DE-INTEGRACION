import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'lib-img-preview',
  templateUrl: './img-preview.component.html',
  styleUrls: ['./img-preview.component.scss']
})
export class GlxImgPreviewComponent implements OnChanges {

  @Input() src: string | ArrayBuffer = '';
  @Input() alt = '';
  @Input() file: File;

  constructor() { }

  fileToBase64(file: File) {
    // image/png, application/pdf
    if (file.type.includes('image')) {
      const reader = new FileReader();
      reader.onload = ( e ) => { this.src = e.target.result; };
      reader.readAsDataURL(file);
    }
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes?.file?.currentValue) {
      this.fileToBase64(changes.file.currentValue);
    }
  }

}
