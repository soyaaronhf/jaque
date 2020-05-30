import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { UsersHeaderComponent } from './users-header/users-header.component';
import { UsersTableComponent } from './users-table/users-table.component';
import { AppRoutingModule } from '../app-routing.module';
import { UsersTableHeaderComponent } from './users-table-header/users-table-header.component';



@NgModule({
  declarations: [HeaderComponent, SidebarComponent, UsersHeaderComponent, UsersTableComponent, UsersTableHeaderComponent],
  imports: [
    CommonModule,
    AppRoutingModule
  ],
  exports: [
    HeaderComponent,
    SidebarComponent,
    UsersHeaderComponent,
    UsersTableComponent,
  ]
})
export class ComponentsModule { }
