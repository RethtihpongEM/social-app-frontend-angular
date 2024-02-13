import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  ValidationErrors,
  ValidatorFn,
  Validators,
} from '@angular/forms';
import { StrongPasswordRegex } from '../constant';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
})
export class SignupComponent {
  form: FormGroup;
  errorMsg: string;
  isLoading: boolean = false;
  constructor(private fb: FormBuilder, private authService: AuthService) {
    this.errorMsg = '';
    this.isLoading = false;
    this.form = this.fb.group(
      {
        firstname: [null, [Validators.required]],
        lastname: [null, [Validators.required]],
        username: [null, [Validators.required]],
        email: [null, [Validators.required, Validators.email]],
        password: [
          null,
          [Validators.required, Validators.pattern(StrongPasswordRegex)],
        ],
        confPassword: [null, [Validators.required]],
      },
      {
        validator: this.PasswordValidator('password', 'confPassword'),
      }
    );
  }

  PasswordValidator(password: string, confPassword: string) {
    return (formGroup: FormGroup) => {
      const control = formGroup.controls[password];
      const matchingControl = formGroup.controls[confPassword];
      if (
        matchingControl.errors &&
        !matchingControl.errors?.['confirmedValidator']
      ) {
        return;
      }
      if (control.value !== matchingControl.value) {
        matchingControl.setErrors({ confirmedValidator: true });
      } else {
        matchingControl.setErrors(null);
      }
    };
  }

  get formValue() {
    return this.form.value;
  }

  onSubmit() {
    this.isLoading = true;
    if (this.formValue.confPassword !== this.formValue.password) {
      this.errorMsg = 'Sign up is unsuccessful';
    } else {
      delete this.formValue.confPassword;
      console.log(this.formValue);
    }
    this.isLoading = false;
  }
}
