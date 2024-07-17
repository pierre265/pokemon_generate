import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { BorderCardDirective } from "./border-card.directive";
import { DetailPokemonComponent } from "./detail-pokemon/detail-pokemon.component";
import { ListPokemonComponent } from "./list-pokemon/list-pokemon.component";
import { PokemonTypeColorPipe } from "./pokemon-type-color.pipe";

@NgModule({
  declarations: [
    AppComponent, 
    BorderCardDirective,
    PokemonTypeColorPipe,
    ListPokemonComponent,
    DetailPokemonComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
