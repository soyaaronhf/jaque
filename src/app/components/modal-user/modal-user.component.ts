import { Component, OnInit } from '@angular/core';
import { ModalService } from 'src/app/services/modal.service';
import { UserService } from 'src/app/services/users.service';

@Component({
  selector: 'app-modal-user',
  templateUrl: './modal-user.component.html',
  styleUrls: ['./modal-user.component.scss']
})
export class ModalUserComponent implements OnInit {

  constructor(public modalService:ModalService, public userService:UserService) { }

  ngOnInit(): void {
  }

  getRoles(roles:object){
    return Object.keys(roles);
  }

}
