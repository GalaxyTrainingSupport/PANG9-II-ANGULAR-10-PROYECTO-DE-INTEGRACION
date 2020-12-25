import { Component, EventEmitter, Input, OnInit, Output, SimpleChanges } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IWorkshopFormData } from '@galaxy/commons/interfaces/workshop.interface';

import { Instructor } from '@galaxy/commons/models/instructor.model';
import { Workshop } from '@galaxy/commons/models/workshop.model';

@Component({
  selector: 'app-workshop-form',
  templateUrl: './workshop-form.component.html',
  styleUrls: ['./workshop-form.component.scss']
})
export class WorkshopFormComponent {

  @Input() instructors: Instructor[];
  @Input() workshop: Workshop;
  @Output() save: EventEmitter<IWorkshopFormData> = new EventEmitter<IWorkshopFormData>();
  @Output() cancel: EventEmitter<void> = new EventEmitter<void>();
  form: FormGroup;

  get date() {
    return this.form.get('date');
  }

  get dateError(): string {
    if (this.date.hasError('required')) {
      return 'Este campo es requerido';
    } else if (this.date.hasError('minlength')) {
      return 'La fecha debe tener como mínimo 8 caracteres';
    } else if (this.date.hasError('pattern')) {
      return 'La fecha no cumple el formato estándar dd/mm/yyy';
    }
  }

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      instructor: ['', Validators.required],
      name: ['', Validators.required],
      description: ['', Validators.required],
      date: ['', [Validators.required, Validators.minLength(8), Validators.pattern('')]],
      start: ['', Validators.required],
      startMeridiem: ['', Validators.required],
      end: ['', Validators.required],
      endMeridiem: ['', Validators.required],
    })
  }

  send(): void {
    if (this.form.invalid) { return }
    this.save.emit(this.form.value);
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes.instructors?.currentValue) {
      console.log(changes.instructor?.currentValue);
    }
    if (changes?.workshop?.currentValue) {
      this.updateValues();
    }
  }

  updateValues(): void {
    this.form.patchValue({
      instructor: this.workshop.instructor._id,
      name: this.workshop.name,
      description: this.workshop.description,
      date: this.workshop.date,
      start: this.workshop.start,
      startMeridiem: this.workshop.startMeridiem,
      end: this.workshop.end,
      endMeridiem: this.workshop.endMeridiem,
    })
  }

}
