import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { UsersHeaderComponent } from './users-header/users-header.component';



@NgModule({
  declarations: [HeaderComponent, SidebarComponent, UsersHeaderComponent],
  imports: [
    CommonModule
  ],
  exports: [
    HeaderComponent,
    SidebarComponent,
    UsersHeaderComponent
  ]
})
export class ComponentsModule { }
