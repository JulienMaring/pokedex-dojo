import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { PokeCardComponent } from './pokedex-page/components/poke-card/poke-card.component';
import { PokeListComponent } from './pokedex-page/components/poke-list/poke-list.component';
import { PokedexPageComponent } from './pokedex-page/pokedex-page.component';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    PokeCardComponent,
    PokeListComponent,
    PokedexPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
