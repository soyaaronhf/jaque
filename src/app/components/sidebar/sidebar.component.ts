import { Component } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent{

  menu = [
    {
      name:'Usuarios',
      slug:'usuarios',
      icon:'users'
    },
    {
      name:'Slider',
      slug:'slider',
      icon:'slider'
    },
    {
      name:'Reportes',
      slug:'reportes',
      icon:'reports'
    },
    {
      name:'Términos',
      slug:'terminos',
      icon:'terms'
    },
    {
      name:'Redes',
      slug:'redes',
      icon:'networks'
    }
  ]

}
