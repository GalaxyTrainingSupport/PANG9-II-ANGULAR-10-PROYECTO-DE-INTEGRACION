import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { ISignInFormData } from '../../../interfaces/sign-in-form-data';

@Component({
  selector: 'app-sign-in-form',
  templateUrl: './sign-in-form.component.html',
  styleUrls: ['./sign-in-form.component.scss']
})
export class SignInFormComponent implements OnInit {

  @Output() sigInData: EventEmitter<ISignInFormData> = new EventEmitter<ISignInFormData>();
  formGroup: FormGroup;
  showPassword = false;

  constructor(private fb: FormBuilder) {
    this.formGroup = this.fb.group({
      email: ['', [Validators.required, Validators.pattern(/[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$/)]],
      password: ['', Validators.required]
    })
  }

  ngOnInit(): void {
  }

  send(): void {
    if (this.formGroup.valid) {
      this.sigInData.emit(this.formGroup.value);
    }
  }

}
