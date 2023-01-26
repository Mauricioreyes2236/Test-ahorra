import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InsuredPersonComponent } from './insured-person/insured-person.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {path: 'insured', component: InsuredPersonComponent},
      {path: '**', redirectTo: 'insured'}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Ejercicio2RoutingModule { }
