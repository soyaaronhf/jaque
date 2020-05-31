import { Component, Input } from '@angular/core';
import { User } from 'src/app/services/users.service';
import { UserService } from "src/app/services/users.service";

@Component({
  selector: 'app-users-table',
  templateUrl: './users-table.component.html',
  styleUrls: ['./users-table.component.scss']
})
export class UsersTableComponent {
  
  constructor(public userService:UserService) { }

  ngOnInit(): void {
  }

}
