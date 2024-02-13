import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/interface';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
})
export class UsersComponent implements OnInit {
  users!: User[];
  getUsers() {
    this.userService.getUsers().subscribe((data) => {
      this.users = data;
    });
  }
  deleteUser(id: string) {
    this.userService.deleteUser(id).subscribe({
      next: (res) => {
        this.getUsers();
      },
      error: (error) => {
        console.log(error.error.message);
      },
    });
  }
  constructor(private userService: UserService) {}
  ngOnInit(): void {
    this.getUsers();
  }


}
