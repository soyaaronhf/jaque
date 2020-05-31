import { Component, Input, Output, EventEmitter } from '@angular/core';
import { User } from 'src/app/services/users.service';
import { ModalService } from 'src/app/services/modal.service';
@Component({
  selector: 'app-users-table-squares',
  templateUrl: './users-table-squares.component.html',
  styleUrls: ['./users-table-squares.component.scss']
})
export class UsersTableSquaresComponent {

  @Output() changeUserStatus: EventEmitter<User>;
  @Output() deleteUser: EventEmitter<User>;


  @Input() data:User[];
  @Input() roles:object;
  @Input() perPage:number = 8;
  @Input() page:number = 1;
  
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

  getDataPage(){
    return this.data.slice( (this.page-1)*this.perPage, this.page*this.perPage )
  }

}
