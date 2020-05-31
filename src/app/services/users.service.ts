import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class UserService {
  
  usersUrl = 'assets/users.json';
  rolesUrl = 'assets/roles.json';

  error: any;
  users: User[] = [];
  roles: object = {};
  results: User[];

  constructor(private http: HttpClient) { }
  
  getUsers() {
    this.http.get<User[]>(this.usersUrl).subscribe(
      (data: any) => this.users = data.users,
      error => this.error = error
    );
  }

  getRoles() {
    this.http.get<Rol[]>(this.rolesUrl).subscribe(
      (data: any) => {
        data.roles.map(rol=>{
          this.roles[rol.id] = rol.position
        })
      },
      error => this.error = error
    );
  }

  search( keyword:any ){
    this.results = keyword ? this.users.filter(user => user.name.toLowerCase().search(keyword) >= 0 || user.email.toLowerCase().search(keyword) >= 0) : null
  }
  
  deleteUser( user:User ){
    this.users.splice(this.users.findIndex(u=>u===user), 1);
    if(this.results && this.results.length){
      this.results.splice(this.results.findIndex(u=>u===user), 1);
    }
  }

  changeStatus( user:User ){
    this.users[this.users.indexOf(user)].active = !user.active;  
  }

  newUser(user:User){
    this.users.push(user);
  }

  updateUser(current:User,newData:User){
    this.users[this.users.indexOf(current)] = newData;
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