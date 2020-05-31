import { Component } from '@angular/core';
import { UserService, User } from "src/app/services/users.service";
import { ModalService } from 'src/app/services/modal.service';

@Component({
  selector: 'app-users-table',
  templateUrl: './users-table.component.html',
  styleUrls: ['./users-table.component.scss']
})
export class UsersTableComponent {
  
  view:string='list';
  filterData:User[] = null;
  perPage:number = 8;
  page:number = 1;

  constructor(public userService:UserService, public modalService:ModalService) { }

  changeView(view:string){
    this.view = view;
  }

  setPerPage(perPage:number){
    this.perPage = perPage;
  }

  setPage(page:number){
    this.page = page;
  }

}
