import {Component, Input, OnInit} from '@angular/core';
import { Pokemon } from 'src/app/pokedex-page/types/pokemon.interface';
import {PokeServiceService} from 'src/app/pokedex-page/service/poke-service.service';

const colors = {
  fire: '#FDDFDF',
  grass: '#DEFDE0',
  electric: '#FCF7DE',
  water: '#DEF3FD',
  ground: '#f4e7da',
  rock: '#d5d5d4',
  fairy: '#fceaff',
  poison: '#98d7a5',
  bug: '#f8d5a3',
  dragon: '#97b3e6',
  psychic: '#eaeda1',
  flying: '#F5F5F5',
  fighting: '#E6E0D4',
  normal: '#F5F5F5'
};
const main_types = Object.keys(colors);

@Component({
  selector: 'app-poke-card',
  templateUrl: './poke-card.component.html',
  styleUrls: ['./poke-card.component.scss']
})
export class PokeCardComponent implements OnInit {
  @Input() pokemon!: Pokemon;
  constructor(private pokeService: PokeServiceService) { }

  ngOnInit(): void {
    this.name = this.pokemon.name[0].toUpperCase() + this.pokemon.name.slice(1);
    this.type = main_types.find(type => this.pokemon.types.map(type => type.type.name).indexOf(type) > -1);
    // @ts-ignore
    this.color = colors[this.type];
    this.imageUrl = "https://pokeres.bastionbot.org/images/pokemon/" + this.pokemon.id + ".png";;
  }

  public imageUrl: string = ''

  public name: string = '';
  public type: string | undefined = '';
  public color: string = '';

  public get firstAbility() {
    return this.pokeService.getFirstAbility(this.pokemon);
  }

  public get weight() {
    return this.pokeService.convertPoundsToKilograms(this.pokemon.weight);
  }
}
