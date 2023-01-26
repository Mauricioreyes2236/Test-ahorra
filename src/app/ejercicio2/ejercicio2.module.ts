import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Ejercicio2RoutingModule } from './ejercicio2-routing.module';
import { InsuredPersonComponent } from './insured-person/insured-person.component';


@NgModule({
  declarations: [
    InsuredPersonComponent
  ],
  imports: [
    CommonModule,
    Ejercicio2RoutingModule
  ]
})
export class Ejercicio2Module { }
