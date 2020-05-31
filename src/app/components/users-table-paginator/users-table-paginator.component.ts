import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-users-table-paginator',
  templateUrl: './users-table-paginator.component.html',
  styleUrls: ['./users-table-paginator.component.scss']
})
export class UsersTablePaginatorComponent {

  @Output() paginate: EventEmitter<number>;

  @Input() perPage:number=8;
  @Input() totalItems:number;
  @Input() page:number = 1;

  constructor() {
    this.paginate = new EventEmitter();
  }
  

  getNumberOfPages(){
    return [].constructor(Math.ceil(this.totalItems/this.perPage))
  }

  setPage(page:number){
    this.paginate.emit(page);
  }

}
