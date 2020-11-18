import { Component, OnInit } from '@angular/core';
import { PokemonAPIService } from 'src/app/services/pokemonAPI/pokemon-api.service';

@Component({
  selector: 'app-trainer-page',
  templateUrl: './trainer-page.component.html',
  styleUrls: ['./trainer-page.component.scss']
})
export class TrainerPageComponent implements OnInit {

  currentPokemonPage = [];

  constructor(private api: PokemonAPIService) { }

  ngOnInit(): void {
  }

  async getAllPokemons() {
    console.log('Button clicked');
    const pokemons = await this.api.getAllPokemons();
    console.log(pokemons);
  }

  async getPageOfPokemons(index: number) {
    let page = await this.api.getPokemonPage(index);
    this.currentPokemonPage = page.results;
    console.log(this.currentPokemonPage);
  }

  async getPokemonByUrl(url: string) {
    let pokemon = await this.api.getPokemonByUrl(url);
    console.log(pokemon);
  }


}
