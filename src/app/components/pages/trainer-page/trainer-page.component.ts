import { Component, OnInit } from '@angular/core';
import { PokemonAPIService } from 'src/app/services/pokemonAPI/pokemon-api.service';

@Component({
  selector: 'app-trainer-page',
  templateUrl: './trainer-page.component.html',
  styleUrls: ['./trainer-page.component.scss']
})
export class TrainerPageComponent implements OnInit {

  currentPokemonPage = [];
  

  constructor(private api: PokemonAPIService) {
   }

  ngOnInit(): void {
  }

  async getAllPokemons() {
    console.log('Button clicked');
    const pokemons = await this.api.getAllPokemons();
    console.log(pokemons);
  }

  getPageOfPokemons(index: number) {
    // let page = await this.api.getPokemonPage(index);
    // // this.currentPokemonPage = page.results;
    // // console.log(this.currentPokemonPage);
    // // console.log(page);
    // this.currentPokemonPage = [];
    // for (let i = 0; i < 50; i++) {
    //   let pokemon = {name: '', imgUrl: ''};
    //   pokemon.name = page.results[i].name;
    //   let url = page.results[i].url;
    //   let pokemonDetails = await this.api.getPokemonByUrl(url);
    //   pokemon.imgUrl = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/' + pokemonDetails.id + '.png';
    //   console.log(pokemonDetails);
    //   this.currentPokemonPage.push(pokemon);
    // }
    this.currentPokemonPage = this.api.getPreLoadedPokemonPage(index);
  }

  async getPokemonByUrl(url: string) {
    let pokemon = await this.api.getPokemonByUrl(url);
    console.log(pokemon);
  }


}
