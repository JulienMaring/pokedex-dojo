import { Injectable } from '@angular/core';
import { Pokemon } from 'src/app/pokedex-page/types/pokemon.interface';

@Injectable({
  providedIn: 'root'
})
export class PokeServiceService {

  constructor() { }

  readonly POUND_IN_KG =  0.453592;

  public convertPoundsToKilograms(pounds: number) {
    return pounds * this.POUND_IN_KG;
  }

  public getFirstAbility(pokemon: Pokemon) {
    return pokemon.abilities.length == 0 ? null: pokemon.abilities[0].ability.name;
  }
}
