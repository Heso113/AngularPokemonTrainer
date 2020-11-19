import { Component, OnInit } from '@angular/core';
import { PokemonAPIService } from 'src/app/services/pokemonAPI/pokemon-api.service';

@Component({
  selector: 'app-pokemon-catalogue',
  templateUrl: './pokemon-catalogue.component.html',
  styleUrls: ['./pokemon-catalogue.component.scss']
})
export class PokemonCatalogueComponent implements OnInit {

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
    // this.currentPokemonPage = page.results;
    // console.log(this.currentPokemonPage);
    // console.log(page);
    this.currentPokemonPage = [];
    for (let i = 0; i < 50; i++) {
    let pokemon = await this.createPokemonCardObject(i, page);
      this.currentPokemonPage.push(pokemon);
    }
  }

  async createPokemonCardObject(index: number, page:Object) {
    let pokemon = {name: '', imgUrl: ''};
    let pokemonName = page.results[index].name;
    pokemon.name = pokemonName.charAt(0).toUpperCase() + pokemonName.slice(1)
    let url = page.results[index].url;
    let pokemonDetails = await this.api.getPokemonByUrl(url);
    pokemon.imgUrl = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/' + pokemonDetails.id + '.png';
    return pokemon; 
  }

  async getPokemonByUrl(url: string) {
    let pokemon = await this.api.getPokemonByUrl(url);
    console.log(pokemon);
  }


}
