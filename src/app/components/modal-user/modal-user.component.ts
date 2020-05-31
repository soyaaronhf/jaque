import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ModalService } from 'src/app/services/modal.service';
import { UserService } from 'src/app/services/users.service';
@Component({
  selector: 'app-modal-user',
  templateUrl: './modal-user.component.html',
  styleUrls: ['./modal-user.component.scss']
})
export class ModalUserComponent {

  regxEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,6}$/;
  error:boolean = false

  profileForm = new FormGroup({
    picture: new FormControl('http://www.fillmurray.com/200/300'),
    name: new FormControl('',[ Validators.required, Validators.minLength(3) ]),
    fathersLastName: new FormControl('',[ Validators.required, Validators.minLength(3) ]),
    mothersLastName: new FormControl('',[ Validators.required, Validators.minLength(3) ]),
    email: new FormControl('',[ Validators.required, Validators.minLength(8), Validators.pattern(this.regxEmail) ]),
    roleId: new FormControl(null,[ Validators.required, Validators.min(1) ]),
    active: new FormControl()
  });

  constructor(public modalService:ModalService, public userService:UserService) {
  }

  getRoles(roles:object){
    return Object.keys(roles);
  }

  cleanForm(){
    this.error = false
    this.profileForm.reset();
  }

  onSubmit(){
    if(this.profileForm.valid){
      this.error = false
      this.userService.newUser(this.profileForm.value);
      this.modalService.closeModal('user');
      this.cleanForm();
    }else{
      this.error = true
    }
  }

}
