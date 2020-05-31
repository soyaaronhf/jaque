import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-users-table-header',
  templateUrl: './users-table-header.component.html',
  styleUrls: ['./users-table-header.component.scss']
})
export class UsersTableHeaderComponent {
  
  @Output() view: EventEmitter<string>;
  @Output() filter: EventEmitter<object>;
  @Output() pagination: EventEmitter<number>;

  filterParams:object = null

  constructor(){
    this.view = new EventEmitter();
    this.filter = new EventEmitter();
    this.pagination = new EventEmitter();
  }

  changeView( view:string ){
    this.view.emit(view);
  }

  setfilter(filter:object){
    this.filterParams = {...this.filterParams,...filter}
    this.filter.emit(this.filterParams);
  }

  setPagination(perPage:string){
    this.pagination.emit(parseInt(perPage));
  }

}
