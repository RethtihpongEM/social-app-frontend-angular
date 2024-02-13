import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoadingSpinnerComponent } from './loading-spinner/loading-spinner.component';
import { CreateUserModalComponent } from './modals/create-user-modal/create-user-modal.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UserService } from '../services/user.service';

@NgModule({
  declarations: [LoadingSpinnerComponent, CreateUserModalComponent],
  imports: [CommonModule,FormsModule, ReactiveFormsModule],
  exports: [LoadingSpinnerComponent, CreateUserModalComponent],
  providers: [UserService]
})
export class ComponentsModule {}
