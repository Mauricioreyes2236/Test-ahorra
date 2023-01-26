import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ErrorPageComponent } from './shared/error-page/error-page.component';

const routes: Routes = [
  {
    path:'auth',
    loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule)},
  {
    path: 'insurance', 
    loadChildren: () => import('./ejercicio2/ejercicio2.module').then(m => m.Ejercicio2Module)
  },
  {
    path: 'pokemon', 
    loadChildren: () => import('./pokemon/pokemon.module').then(m => m.PokemonModule)
  },
  {
    path:'404',
    component: ErrorPageComponent
  },
  {
    path:'**',
    redirectTo: '404'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
