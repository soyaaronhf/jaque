import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class UserService {
  usersUrl = 'assets/users.json';
  rolesUrl = 'assets/roles.json';

  constructor(private http: HttpClient) { }
  
  getUsers() {
    return this.http.get<User[]>(this.usersUrl)
  }

  getRoles() {
    return this.http.get<Rol[]>(this.rolesUrl)
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