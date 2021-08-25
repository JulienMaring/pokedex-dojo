import { Component, OnInit } from '@angular/core';
import {Pokemon} from 'src/app/pokedex-page/types/pokemon.interface';
import {PokeClientService} from 'src/app/pokedex-page/service/poke-client.service';
import {map, mergeMap, skip, take, tap} from 'rxjs/operators';
import {interval} from 'rxjs';

@Component({
  selector: 'app-poke-list',
  templateUrl: './poke-list.component.html',
  styleUrls: ['./poke-list.component.scss']
})
export class PokeListComponent implements OnInit {

  public POKEMON_NUMBER = 20;

  public pokemons: Pokemon[] = [];

  constructor(private pokeClientApi: PokeClientService) { }

  ngOnInit(): void {
    this.fetchPokemons();
  }

  async fetchPokemons() {
    const pokemonsIndex = interval(500).pipe(
      skip(1),
      take(this.POKEMON_NUMBER));
    pokemonsIndex.pipe(
      mergeMap((id: number) => {
        return this.getPokemon(id);
      })
    ).subscribe();

  };

  public getPokemon(id: number) {
    return this.pokeClientApi.getPokemon(id).pipe(
      tap(pokemon => this.pokemons.push(pokemon))
    )
  };

}
