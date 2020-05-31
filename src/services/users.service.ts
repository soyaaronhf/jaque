import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class UserService {
  
  usersUrl = 'assets/users.json';
  rolesUrl = 'assets/roles.json';

  error: any;
  users: User[] = [];
  roles: Rol[] = [];
  results: User[] | boolean = false;

  constructor(private http: HttpClient) { }
  
  getUsers() {
    this.http.get<User[]>(this.usersUrl).subscribe(
      (data: any) => this.users = data.users,
      error => this.error = error
    );
  }

  getRoles() {
    this.http.get<Rol[]>(this.rolesUrl).subscribe(
      (data: any) => this.roles = data.roles,
      error => this.error = error
    );
  }

  search( keyword:any ){
    this.results = keyword ? this.users.filter(user => user.name.toLowerCase().search(keyword) >= 0 || user.email.toLowerCase().search(keyword) >= 0) : false
  }
  
  deleteUser( user:User ){
    this.users.splice(this.users.indexOf(user), 1);
  }

  changeStatus(user:User){
    this.users[this.users.indexOf(user)].active = !user.active;  
  }
}

export interface User{
  picture: string,
  name: string,
  fathersLastName:string,
  mothersLastName: string,
  email: string,
  roleId: number,
  active: boolean
}

export interface Rol{
  id: number,
  position: string
}