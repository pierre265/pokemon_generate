import { Injectable } from "@angular/core";
import { POKEMONS } from "./mock-pockemon-list";
import { Pokemon } from "./pokemon";
import { HttpClient } from "@angular/common/http";
import { catchError, Observable, of, tap } from "rxjs";

@Injectable()
export class PokemonService {

  constructor(private http: HttpClient){}


  getPokemonList(): Observable <Pokemon[]>{
    //return POKEMONS;
    return this.http.get<Pokemon[]>("api/pokemons").pipe(
      tap((pokemonList) => console.table(pokemonList)),
      catchError((error) => {
        console.error(error);
        return of([]);
      })
    )
  }

  getPokemonById(pokemonId: number): Pokemon | undefined {
    return POKEMONS.find(pokemon => pokemon.id == pokemonId);
  }

  getPokemonTypeList(): string[] {
    return [
      "Plante",
      "Feu",
      "Eau",
      "Insecte",
      "Normal",
      "Electrik",
      "Poison",
      "Fée",
      "Vol",
      "Combat",
      "Psy",
    ];
  }
}
