import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  isLoading: boolean = false;
  form: FormGroup;
  constructor(private fb: FormBuilder, private authService: AuthService, private router: Router) {
    this.form = this.fb.group({
      email: [null, [Validators.required, Validators.email]],
      password: [null, [Validators.required]],
    });
  }

  get formValue() {
    return this.form.value;
  }

  onSubmit() {
    this.isLoading = true;
    this.authService.login(this.formValue).subscribe({
      next: (res) => {
        localStorage.setItem('aT',res.accessToken);
        this.router.navigate(['/dashboard'])
        // console.log(res);
      },
      error: (error) => console.log(error),
    });
    this.form.reset();
    this.isLoading = false;
  }
}
