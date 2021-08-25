import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { PokedexPageComponent } from './pokedex-page/pokedex-page.component';

const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'pokedex', component: PokedexPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
