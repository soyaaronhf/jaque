import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersComponent } from './users/users.component';
import { ComponentsModule } from '../components/components.module';
import { UserService } from 'src/services/users.service';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [UsersComponent],
  providers: [UserService],
  imports: [
    CommonModule,
    ComponentsModule,
    HttpClientModule
  ]
})
export class PagesModule { }
