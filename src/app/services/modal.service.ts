import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ModalService {

  modals:object = {
    activeUsers:false
  };

  showModal(modal:string){
    this.modals[modal] = true;
    document.body.classList.add("open-modal");
  }

  closeModal(modal:string){
    this.modals[modal] = false;
    document.body.classList.remove("open-modal");
  }

}
