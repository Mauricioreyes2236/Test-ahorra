import { HttpClient } from "@angular/common/http";
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  baseUrl:string = 'https://pokeapi.co/api/v2/';

  constructor(private _http:HttpClient) { }

  getPokemons(): Observable<any>{
    return this._http.get<any>(`${this.baseUrl}pokemon/`)
  }

}
