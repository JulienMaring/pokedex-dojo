import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PokeCardComponent } from './poke-card/poke-card.component';
import { PokeListComponent } from './poke-list/poke-list.component';
import { HttpClientModule } from '@angular/common/http';
import { FilterTypeDirective } from './directive/filter-type.directive';

@NgModule({
  declarations: [
    AppComponent,
    PokeCardComponent,
    PokeListComponent,
    FilterTypeDirective
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
