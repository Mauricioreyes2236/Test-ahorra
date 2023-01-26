import { Component, OnInit } from '@angular/core';
import { PokemonService } from '../../services/pokemon.service';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styles: [
  ]
})
export class ListadoComponent implements OnInit{

  pokemonList: any[] = [];

  constructor(private _pService: PokemonService){}

  ngOnInit(): void {
    this._pService.getPokemons()
        .subscribe(pokemons => {
          console.log(pokemons);
          this.pokemonList = pokemons.results;
          
        });
  }
}
