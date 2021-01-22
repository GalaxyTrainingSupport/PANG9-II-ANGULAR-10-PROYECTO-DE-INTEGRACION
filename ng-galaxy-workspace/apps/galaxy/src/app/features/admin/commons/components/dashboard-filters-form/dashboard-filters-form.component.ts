import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DashboardFiltersData } from '../../interfaces/dashboard-filters-data';
import { dayJs } from '@galaxy/commons/utils';

const validateStartEnd = (formGroup: FormGroup) => {
  const endControl = formGroup.get('end');
  const start = formGroup.get('start').value;
  const end = endControl.value;

  if (start && end) {
    const isInvalid = dayJs(start).isAfter(dayJs(end));
    if (isInvalid) {
      endControl.setErrors({ invalid: 'La fecha final debe ser mayor que la inicial' });
    }
  }
};

const validateStartEnd2 = (startName: string, endName: string) => {
  return (formGroup: FormGroup) => {
    const endControl = formGroup.get(endName);
    const start = formGroup.get(startName).value;
    const end = endControl.value;

    if (start && end) {
      const isInvalid = dayJs(start).isAfter(dayJs(end));
      if (isInvalid) {
        endControl.setErrors({ invalid: 'La fecha final debe ser mayor que la inicial' });
      }
    }
  };
};



@Component({
  selector: 'app-dashboard-filters-form',
  templateUrl: './dashboard-filters-form.component.html',
  styleUrls: ['./dashboard-filters-form.component.scss']
})
export class DashboardFiltersFormComponent {
  @Output() search: EventEmitter<DashboardFiltersData> = new EventEmitter<DashboardFiltersData>();

  formGroup: FormGroup;

  constructor(private fb: FormBuilder) {
    this.formGroup = this.fb.group({
      start: [null, Validators.required],
      end: null,
    }, { validators: validateStartEnd2('start', 'end') });
  }

  submit() {
    if (this.formGroup.valid) { this.search.emit(this.formGroup.value); }
  }


}
