import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  message:string;
  show:boolean = false;

  showMessage(message:string){
    this.message = message;
    this.show = true
  }

  closeMessage(){
    this.show = false;
  }

}
