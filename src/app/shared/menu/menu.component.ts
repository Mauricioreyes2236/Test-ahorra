import { Component } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styles: [
    `
      li{
        cursor: pointer;
      }
    `
  ]
})
export class MenuComponent {
  MenuItems: any[] = [
    {
      texto:'Ejercicio 1',
      ruta: './pokemon/list'
    },
    {
      texto:'Ejercicio2',
      ruta: './insurance/insured'
    },
  ];
}
