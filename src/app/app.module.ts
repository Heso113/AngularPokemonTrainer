import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StartPageComponent } from './components/pages/start-page/start-page.component';
import { LoginFormComponent } from './components/forms/login-form/login-form.component';
import { TrainerPageComponent } from './components/pages/trainer-page/trainer-page.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { PokemonCatalogueComponent } from './components/pages/pokemon-catalogue/pokemon-catalogue.component';
import { PokemonDetailsComponent } from './components/pages/pokemon-details/pokemon-details.component';
import { PokemonCardComponent } from './components/pokemon-card/pokemon-card.component';

@NgModule({
  declarations: [
    AppComponent,
    StartPageComponent,
    LoginFormComponent,
    TrainerPageComponent,
    PokemonCatalogueComponent,
    PokemonDetailsComponent,
    PokemonCardComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
