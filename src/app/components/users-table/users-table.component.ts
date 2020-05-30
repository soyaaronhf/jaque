import { Component, OnInit, Input } from '@angular/core';
import { User } from 'src/services/users.service';

@Component({
  selector: 'app-users-table',
  templateUrl: './users-table.component.html',
  styleUrls: ['./users-table.component.scss']
})
export class UsersTableComponent implements OnInit {

  @Input() data:User[]

  constructor() { }

  ngOnInit(): void {
  }

}
