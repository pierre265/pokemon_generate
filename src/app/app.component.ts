import { Component, OnInit } from "@angular/core";
import { POKEMONS } from "./mock-pockemon-list";
import { Pokemon } from "./pokemon";

@Component({
  selector: "app-root",
  templateUrl: 'app.component.html'
})
export class AppComponent implements OnInit {
  pokemonList: Pokemon [] = POKEMONS;

  ngOnInit(): void {
    console.table(this.pokemonList);
  }

  selectPokemon(event: MouseEvent ) {
    const index: number = +(event.target as HTMLInputElement).value;
    console.log(`Vous avez cliqué sur le pokémon ${this.pokemonList[index].name}`);
  }
}
