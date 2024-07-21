import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { RouterModule, Routes } from "@angular/router";
import { AuthGuard } from "../auth.guard";
import { AddPokemonComponent } from "./add-pokemon/add-pokemon.component";
import { BorderCardDirective } from "./border-card.directive";
import { DetailPokemonComponent } from "./detail-pokemon/detail-pokemon.component";
import { EditPokemonComponent } from "./edit-pokemon/edit-pokemon.component";
import { ListPokemonComponent } from "./list-pokemon/list-pokemon.component";
import { LoaderComponent } from "./loader/loader.component";
import { PokemonFormComponent } from "./pokemon-form/pokemon-form.component";
import { PokemonTypeColorPipe } from "./pokemon-type-color.pipe";
import { PokemonService } from "./pokemon.service";
import { SearchPokemonComponent } from "./search-pokemon/search-pokemon.component";
import { LoginComponent } from "../login/login.component";

const pokemonRoutes: Routes = [
  {
    path: "edit/pokemon/:id",
    component: EditPokemonComponent,
    canActivate: [AuthGuard],
  },
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
    LoginComponent,
  ],
  imports: [CommonModule, FormsModule, RouterModule.forChild(pokemonRoutes)],
  providers: [PokemonService],
})
export class PokemonModule {}
