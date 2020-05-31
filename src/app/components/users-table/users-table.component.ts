import { Component } from '@angular/core';
import { UserService } from "src/app/services/users.service";
import { ModalService } from 'src/app/services/modal.service';

@Component({
  selector: 'app-users-table',
  templateUrl: './users-table.component.html',
  styleUrls: ['./users-table.component.scss']
})
export class UsersTableComponent {
  
  view:string='list'

  constructor(public userService:UserService, public modalService:ModalService) { }

  changeView(view:string){
    this.view = view;
  }

}
