import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { PokemonAPIService } from 'src/app/services/pokemonAPI/pokemon-api.service';

@Component({
  selector: 'app-pokemon-catalogue',
  templateUrl: './pokemon-catalogue.component.html',
  styleUrls: ['./pokemon-catalogue.component.scss']
})
export class PokemonCatalogueComponent implements OnInit {

  currentPokemonPage = [];
  pokemonPages = new Array();
  currentPokemonCard = {};

  constructor(private api: PokemonAPIService, private router: Router) {
    this.currentPokemonPage = this.api.getPreLoadedPokemonPage(0);
    this.pokemonPages = this.api.getAllPreLoadedPokemonPages();
  }

  ngOnInit(): void {
  }

  onBackClicked() {
    console.log("onback clicked");
    this.hidePokemonCatalogue.emit();
    
  }

  async getPageOfPokemons(index: number) {
    this.currentPokemonPage = this.api.getPreLoadedPokemonPage(index);
  }

 @Output() hidePokemonCatalogue: EventEmitter<any> = new EventEmitter();

 
}
