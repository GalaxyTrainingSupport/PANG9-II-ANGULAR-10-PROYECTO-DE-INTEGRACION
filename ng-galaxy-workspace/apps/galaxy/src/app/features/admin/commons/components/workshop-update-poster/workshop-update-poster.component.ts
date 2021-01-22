import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { GlxValidators } from '@galaxy/commons/forms';


@Component({
  selector: 'app-workshop-update-poster',
  templateUrl: './workshop-update-poster.component.html',
  styleUrls: ['./workshop-update-poster.component.scss']
})
export class WorkshopUpdatePosterComponent {
  // file: File;
  @Output() upload: EventEmitter<File> = new EventEmitter<File>();
  @Input() poster = '';
  fileControl: FormControl;

  constructor() {
    this.fileControl = new FormControl(null, [
      Validators.required,
      GlxValidators.extension(['png', 'jpg'])
    ]);
    this.fileControl.valueChanges.subscribe(res => console.log(res) );
  }

  send() {
    if (this.fileControl.valid) { this.upload.emit(this.fileControl.value); }
  }

  onChange() {
    // console.log(this.file);
  }

}
