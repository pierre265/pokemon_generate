import { Component } from "@angular/core";
import { Pokemon } from "../pokemon";
import { POKEMONS } from "../mock-pockemon-list";

@Component({
  selector: "app-list-pokemon",
  templateUrl: "./list-pokemon.component.html",
})


export class ListPokemonComponent {
  pokemonList: Pokemon[] = POKEMONS;

}
