import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { UsersHeaderComponent } from './users-header/users-header.component';
import { UsersTableComponent } from './users-table/users-table.component';
import { AppRoutingModule } from '../app-routing.module';
import { UsersTableHeaderComponent } from './users-table-header/users-table-header.component';
import { UsersTableListComponent } from './users-table-list/users-table-list.component';
import { ExcerptPipe } from '../pipes/excerpt.pipe';
import { ToggleButtonComponent } from './toggle-button/toggle-button.component';
import { ModalActiveUsersComponent } from './modal-active-users/modal-active-users.component';
import { ModalUserComponent } from './modal-user/modal-user.component';


@NgModule({
  declarations: [
    HeaderComponent,
    SidebarComponent,
    UsersHeaderComponent,
    UsersTableComponent,
    UsersTableHeaderComponent,
    UsersTableListComponent,
    ExcerptPipe,
    ToggleButtonComponent,
    ModalActiveUsersComponent,
    ModalUserComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  exports: [
    HeaderComponent,
    SidebarComponent,
    UsersHeaderComponent,
    UsersTableComponent,
  ]
})
export class ComponentsModule { }
