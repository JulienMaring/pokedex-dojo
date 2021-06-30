import { Component, OnInit } from '@angular/core';
import {Pokemon} from 'src/app/types/pokemon.interface';
import {PokeClientService} from 'src/app/service/poke-client.service';
import {tap} from 'rxjs/operators';

@Component({
  selector: 'app-poke-list',
  templateUrl: './poke-list.component.html',
  styleUrls: ['./poke-list.component.scss']
})
export class PokeListComponent implements OnInit {

  public POKEMON_NUMBER = 150;

  public pokemons: Pokemon[] = [];

  constructor(private pokeClientApi: PokeClientService) { }

  ngOnInit(): void {
    this.fetchPokemons();
  }

  async fetchPokemons() {
    for (let id = 1; id <= this.POKEMON_NUMBER; id++) {
      this.getPokemon(id);
    }
  };

  public getPokemon(id: number) {
    this.pokeClientApi.getPokemon(id).pipe(
      tap(pokemon => this.pokemons.push(pokemon))
    ).subscribe();
  };

}
