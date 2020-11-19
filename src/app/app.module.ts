import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginPageComponent } from './components/pages/login-page/login-page.component';
import { LoginFormComponent } from './components/forms/login-form/login-form.component';
import { TrainerPageComponent } from './components/pages/trainer-page/trainer-page.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { PokemonCatalogueComponent } from './components/pages/pokemon-catalogue/pokemon-catalogue/pokemon-catalogue.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
    LoginFormComponent,
    TrainerPageComponent,
    PokemonCatalogueComponent,
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
