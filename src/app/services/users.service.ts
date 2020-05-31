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

  filter(params:any){
    this.results = this.users;
    if(params.rol && params.rol!=='all'){
      this.results = this.results.filter(u=>u.roleId==params.rol)
    }
    if(params.order){
      if(params.order=='a-z'){
        this.results = this.results.sort((a, b)=> {
          if(a.name < b.name) { return -1; }
          if(a.name > b.name) { return 1; }
          return 0;
        });
      }
      if(params.order=='z-a'){
        this.results = this.results.sort((a, b)=> {
          if(a.name < b.name) { return 1; }
          if(a.name > b.name) { return -1; }
          return 0;
        });
      }
    }
    if(params.keyword){
      this.results = this.results.filter(user => user.name.toLowerCase().search(params.keyword) >= 0 || user.email.toLowerCase().search(params.keyword) >= 0)
    }
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