import { Component, Input } from '@angular/core';
import { User } from 'src/services/users.service';
import { UserService } from "src/services/users.service";

@Component({
  selector: 'app-users-table',
  templateUrl: './users-table.component.html',
  styleUrls: ['./users-table.component.scss']
})
export class UsersTableComponent {
  
  constructor(private userService:UserService) { }

  ngOnInit(): void {
  }

}
