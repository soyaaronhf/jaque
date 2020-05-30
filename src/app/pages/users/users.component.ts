import { Component, OnInit } from '@angular/core';
import { UserService, User, Rol } from "../../../services/users.service";

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  error: any;
  users:User[] = [];
  roles:Rol[] = [];
  results:User[] | boolean = false;
  view:string = 'list';

  constructor(private userService:UserService) { }

  ngOnInit(): void {
    this.userService.getUsers().subscribe(
      (data: any) => this.users = data.users,
      error => this.error = error
    );
    this.userService.getRoles().subscribe(
      (data: any) => this.roles = data.roles,
      error => this.error = error
    );
  }

}
