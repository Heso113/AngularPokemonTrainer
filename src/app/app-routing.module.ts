import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginFormComponent } from './components/forms/login-form/login-form.component';
import { LoginPageComponent } from './components/pages/login-page/login-page.component';
import { PokemonCatalogueComponent } from './components/pages/pokemon-catalogue/pokemon-catalogue/pokemon-catalogue.component';
import { TrainerPageComponent } from './components/pages/trainer-page/trainer-page.component';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
  {
    path: 'loginPage',
    component: LoginPageComponent
  },
  {
    path:'loginForm',
    component: LoginFormComponent
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
    path: '',
    pathMatch: 'full',
    redirectTo: '/loginPage'
  },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
