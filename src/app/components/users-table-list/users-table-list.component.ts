import { Component, OnInit, Input } from '@angular/core';
import { User } from 'src/app/services/users.service';

@Component({
  selector: 'app-users-table-list',
  templateUrl: './users-table-list.component.html',
  styleUrls: ['./users-table-list.component.scss']
})
export class UsersTableListComponent implements OnInit {

  @Input() data:User[];
  @Input() roles:object;
  
  constructor() { }

  ngOnInit(): void {
  }

}
