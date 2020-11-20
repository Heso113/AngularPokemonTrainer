import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginFormComponent } from './components/forms/login-form/login-form.component';
import { StartPageComponent } from './components/pages/start-page/start-page.component';
import { PokemonCatalogueComponent } from './components/pages/pokemon-catalogue/pokemon-catalogue/pokemon-catalogue.component';
import { PokemonDetailsComponent } from './components/pages/pokemon-details/pokemon-details/pokemon-details.component';
import { TrainerPageComponent } from './components/pages/trainer-page/trainer-page.component';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
  {
    path: 'startPage',
    component: StartPageComponent
  },
  {
    path:'loginForm',
    component: LoginFormComponent,
    canActivate: [ AuthGuard ]
  },
  {
    path:'trainerPage',
    component: TrainerPageComponent,
    canActivate: [ AuthGuard ]
  },
  {
    path: 'pokemonCatalogue',
    component: PokemonCatalogueComponent,
    canActivate: [ AuthGuard ]
  },
  {
    path: 'pokemonDetails/:id',
    component: PokemonDetailsComponent,
    canActivate: [ AuthGuard ]
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '/startPage'
  },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
