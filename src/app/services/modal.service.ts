import { Injectable } from '@angular/core';
import { User } from './users.service';

@Injectable({
  providedIn: 'root'
})
export class ModalService {

  tempUser:User;

  modals:object = {
    activeUsers:false,
    user:false
  };

  showModal(modal:string,user?:User){
    this.modals[modal] = true;
    if(user){
      this.tempUser = user
    }
    document.body.classList.add("open-modal");
  }

  closeModal(modal:string){
    this.modals[modal] = false;
    this.tempUser = null;
    document.body.classList.remove("open-modal");
  }

}
