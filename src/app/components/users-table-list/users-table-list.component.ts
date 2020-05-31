import { Component, Input, Output, EventEmitter } from '@angular/core';
import { User } from 'src/app/services/users.service';
import { ModalService } from 'src/app/services/modal.service';

@Component({
  selector: 'app-users-table-list',
  templateUrl: './users-table-list.component.html',
  styleUrls: ['./users-table-list.component.scss']
})
export class UsersTableListComponent {

  @Output() changeUserStatus: EventEmitter<User>;
  @Output() deleteUser: EventEmitter<User>;


  @Input() data:User[];
  @Input() roles:object;
  
  constructor(public modalService:ModalService) {
    this.changeUserStatus = new EventEmitter();
    this.deleteUser = new EventEmitter();
  }

  changeStatus(user:User){
    this.changeUserStatus.emit(user);
  }

  delete(user:User){    
    this.deleteUser.emit(user);
  }

}
