import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'create-user-modal',
  templateUrl: './create-user-modal.component.html',
  styleUrls: ['./create-user-modal.component.scss'],
})
export class CreateUserModalComponent {

  @Input({ required: true }) modalName!: string;
  form: FormGroup;
  errorMsg: string;
  isLoading: boolean = false;

  constructor(private fb: FormBuilder, private userService: UserService) {
    this.errorMsg = '';
    this.isLoading = false;
    this.form = this.fb.group({
      firstName: [null, [Validators.required]],
      lastName: [null, [Validators.required]],
      username: [null, [Validators.required]],
      email: [null, [Validators.required, Validators.email]],
      role: ['USER'],
    });
  }

  get formValue() {
    return this.form.value;
  }

  showMsg: boolean = false;
  isSuccess: boolean = false;
  isError: boolean = false;

  @Output() updateUserTable: EventEmitter<void> = new EventEmitter();

  onSubmit() {
    this.isLoading = true;
    this.userService.createUser(this.formValue).subscribe(
      () => {
        this.isLoading = false;
        this.showMsg = true;
        this.isSuccess = true;
        this.form.reset();
        this.updateUserTable.emit();
      },
      (error) => {
        this.errorMsg = error.error.message;
        this.isLoading = false;
        this.showMsg = true;
        this.form.reset();
        this.isError = true;
        console.log(error);
      }
    );
    setTimeout(() => {
      this.showMsg = false;
      this.isSuccess = false;
      this.isError = false;
    }, 5000);
  }
}
