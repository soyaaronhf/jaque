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

  constructor(public userService:UserService, public modalService:ModalService) { }

  changeView(view:string){
    this.view = view;
  }

  filter(params:any){
    this.filterData = this.userService.users;
    if(params.rol && params.rol!=='all'){
      this.filterData = this.filterData.filter(u=>u.roleId==params.rol)
    }
    if(params.order){
      if(params.order=='a-z'){
        this.filterData = this.filterData.sort((a, b)=> {
          if(a.name < b.name) { return -1; }
          if(a.name > b.name) { return 1; }
          return 0;
        });
      }
      if(params.order=='z-a'){
        this.filterData = this.filterData.sort((a, b)=> {
          if(a.name < b.name) { return 1; }
          if(a.name > b.name) { return -1; }
          return 0;
        });
      }
    }
  }

}
