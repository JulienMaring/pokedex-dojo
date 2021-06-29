import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Pokemon} from 'src/app/types/pokemon.interface';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PokeClientService {

  constructor(private http: HttpClient) { }

  public getPokemon(id: number): Observable<Pokemon> {
    const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
    return this.http.get<Pokemon>(url);
  };
}
