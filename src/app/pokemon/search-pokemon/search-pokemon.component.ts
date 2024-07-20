import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import {
  debounceTime,
  distinctUntilChanged,
  Observable,
  Subject,
  switchMap,
} from "rxjs";
import { Pokemon } from "../pokemon";
import { PokemonService } from "../pokemon.service";

@Component({
  selector: "app-search-pokemon",
  templateUrl: "./search-pokemon.component.html",
})
export class SearchPokemonComponent implements OnInit {
  //Flux de données dans le temps des recherches du User {...."a" ... "ab"...."abs"..}
  searchTerms = new Subject<string>();

  //Afficher les résultats dans le temps
  pokemon$: Observable<Pokemon[]>;

  constructor(private pokemonService: PokemonService, private router: Router) {}

  ngOnInit(): void {
    this.pokemon$ = this.searchTerms.pipe(
      // Attendre 300ms de pause entre chaque requête
      debounceTime(300),
      // Ignorer la recherche en cours si c'est la même que la précédente
      distinctUntilChanged(),
      // Changer la recherche précédente par la nouvelle
      switchMap((term: string) => this.pokemonService.searchPokemonList(term))
    );
  }

  search(term: string) {
    this.searchTerms.next(term);
  }

  goToDetail(pokemon: Pokemon) {
    const link = ["/pokemon", pokemon.id];
    this.router.navigate(link);
  }
}
