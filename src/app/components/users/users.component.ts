import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/users.service';
import { User } from '../../interfaces/user';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
})
export class UsersComponent implements OnInit {
  users: User[] = [];
  user!: User;
  getAllUsers$: Observable<User[]> = this.userService.getAllUsers();
  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.getAllUsers();
  }

  addUser() {
    this.userService.createUser(this.user).then(() => {
      alert('usuario creado con exito!');
    });
  }

  getAllUsers() {
    this.userService.getAllUsers().subscribe((response) => {
      if (response) {
        this.users = response;
      }
    });

    this.getAllUsers$.subscribe((response) => {
      if (response) {
        this.users = response;
      }
    });
  }

  getUserById(userId: string) {
    this.userService.getUserById(userId).subscribe((response) => {
      if (response) {
        alert(`Hola! ${response.id}`);
      }
    });
  }

  updateUser(user: User) {
    this.userService.updateUser(user).then(() => {
      alert('usuario creado con exito!');
    });
  }

  deleteUser(userId: string) {
    this.userService.deleteUser(userId).then(() => {
      alert('usuario borrado con exito!');
    });
  }

  ngOnDestroy() {
    this.getAllUsers$.subscribe().unsubscribe();
  }
}
