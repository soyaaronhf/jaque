import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UsersComponent } from './pages/users/users.component';


const routes: Routes = [
  {
    path:'usuarios',
    component: UsersComponent
  },
  {
    path:'**',
    pathMatch: 'full',
    redirectTo: 'usuarios'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
