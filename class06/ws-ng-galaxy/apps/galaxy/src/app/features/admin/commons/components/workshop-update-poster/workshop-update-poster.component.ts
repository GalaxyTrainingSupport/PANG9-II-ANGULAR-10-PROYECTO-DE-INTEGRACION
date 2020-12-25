import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-workshop-update-poster',
  templateUrl: './workshop-update-poster.component.html',
  styleUrls: ['./workshop-update-poster.component.scss']
})
export class WorkshopUpdatePosterComponent implements OnInit {

  @Output() upload: EventEmitter<File> = new EventEmitter<File>();
  @Input() poster = '';
  fileControl: FormControl

  constructor() {
    this.fileControl = new FormControl(null, Validators.required);
  }

  ngOnInit(): void {
  }

  send(): void {
    if (this.fileControl.valid) {
      this.upload.emit(this.fileControl.value);
    }
  }

  onChange() {

  }

}
