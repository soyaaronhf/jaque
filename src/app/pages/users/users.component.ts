import { Component, OnInit } from '@angular/core';
import { UserService } from "../../../services/users.service";

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  view:string = 'list';

  constructor(private userService:UserService) { }

  ngOnInit(): void {
    this.userService.getUsers();
    this.userService.getRoles();
  }

}
