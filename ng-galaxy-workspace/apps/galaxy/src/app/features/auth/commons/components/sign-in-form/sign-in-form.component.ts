import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SignInFormData } from '../../../interfaces/sign-in-form-data';

@Component({
  selector: 'app-sign-in-form',
  templateUrl: './sign-in-form.component.html',
  styleUrls: ['./sign-in-form.component.scss']
})
export class SignInFormComponent {
  @Output() signIn: EventEmitter<SignInFormData> = new EventEmitter<SignInFormData>();
  formGroup: FormGroup;
  show = false;

  constructor(private fb: FormBuilder) {
    this.formGroup = this.fb.group({
      email: [ '', [Validators.required, Validators.email] ],
      password: [ '', Validators.required ]
    });
  }

  send() {
    if (this.formGroup.valid) { this.signIn.emit(this.formGroup.value); }
  }

}
