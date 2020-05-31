import { Component } from '@angular/core';
import { ModalService } from 'src/app/services/modal.service';
import { UserService, User } from 'src/app/services/users.service';

@Component({
  selector: 'app-modal-active-users',
  templateUrl: './modal-active-users.component.html',
  styleUrls: ['./modal-active-users.component.scss']
})
export class ModalActiveUsersComponent{

  show:boolean = true;

  constructor(public modalService:ModalService, public userService:UserService) { }

  getActiveUsers(users:User[]){
    return users.filter(u=>u.active);
  }

}
