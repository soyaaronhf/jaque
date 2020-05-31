import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-users-table-header',
  templateUrl: './users-table-header.component.html',
  styleUrls: ['./users-table-header.component.scss']
})
export class UsersTableHeaderComponent {
  
  @Output() keyword: EventEmitter<string>
  @Output() view: EventEmitter<string>

  constructor(){
    this.keyword = new EventEmitter();
    this.view = new EventEmitter();
  }

  search( keyword:string ){    
    if(keyword.trim().length){
      this.keyword.emit(keyword.toLowerCase());
    }else{
      this.keyword.emit(null);
    }
  }

  changeView( view:string ){
    this.view.emit(view);
  }

}
