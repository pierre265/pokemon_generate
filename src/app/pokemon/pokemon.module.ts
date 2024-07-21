import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { RouterModule, Routes } from "@angular/router";
import { BorderCardDirective } from "./border-card.directive";
import { DetailPokemonComponent } from "./detail-pokemon/detail-pokemon.component";
import { EditPokemonComponent } from "./edit-pokemon/edit-pokemon.component";
import { ListPokemonComponent } from "./list-pokemon/list-pokemon.component";
import { PokemonFormComponent } from "./pokemon-form/pokemon-form.component";
import { PokemonTypeColorPipe } from "./pokemon-type-color.pipe";
import { PokemonService } from "./pokemon.service";
import { AddPokemonComponent } from "./add-pokemon/add-pokemon.component";
import { SearchPokemonComponent } from "./search-pokemon/search-pokemon.component";
import { LoaderComponent } from "./loader/loader.component";
import { AuthGuard } from "../auth.guard";

const pokemonRoutes: Routes = [
  { path: "edit/pokemon/:id", component: EditPokemonComponent, canActivate: [AuthGuard] },
  { path: "add/pokemon", component: AddPokemonComponent },
  { path: "pokemons", component: ListPokemonComponent },
  { path: "pokemon/:id", component: DetailPokemonComponent },
];
@NgModule({
  declarations: [
    ListPokemonComponent,
    DetailPokemonComponent,
    BorderCardDirective,
    PokemonTypeColorPipe,
    PokemonFormComponent,
    EditPokemonComponent,
    AddPokemonComponent,
    SearchPokemonComponent,
    LoaderComponent,
  ],
  imports: [CommonModule, FormsModule, RouterModule.forChild(pokemonRoutes)],
  providers: [PokemonService],
})
export class PokemonModule {}
