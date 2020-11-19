import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { stringify } from 'querystring';

@Injectable({
  providedIn: 'root'
})
export class PokemonAPIService {

  url = 'https://pokeapi.co/api/v2/';
  pokemonCount = 0;
  numberOfPages = 0;
  nrOfPokemonsPerPage = 50;
  pokemonPages = [];


  constructor(private http: HttpClient) {
    this.initTrainerPage();
  }

  async initTrainerPage() {
    let pokemonInfo = await this.getAllPokemons();
    this.pokemonCount = pokemonInfo.count;
    this.numberOfPages = this.pokemonCount / this.nrOfPokemonsPerPage;
    console.log(this.pokemonCount);
    console.log(this.numberOfPages);
    console.log(pokemonInfo);
    for (let i = 0; i < this.numberOfPages; i++) {
      let nextSetOfPokemons = await this.getPokemonPage(i);
      console.log(nextSetOfPokemons);
      let nextPage = [];
      for (let p = 0; p < this.nrOfPokemonsPerPage; p++) {
        let nextPokemon = await this.getPokemonByUrl(nextSetOfPokemons.results[p].url);
        let name = nextSetOfPokemons.results[p].name;
        let imgUrl = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/' + nextPokemon.id + '.png';
        let pokemonObject = {name, imgUrl};
        nextPage.push(pokemonObject);
      }
      this.pokemonPages.push(nextPage);
    }
    console.log(this.pokemonPages);
  }
  
  getAllPokemons() {
    return this.http.get(this.url + 'pokemon?limit=1050&offset=0').toPromise();
  }

  getPokemonPage(pageIndex: number) {
    const offset = pageIndex * this.nrOfPokemonsPerPage;
    return this.http.get(this.url + 'pokemon?limit=' + this.nrOfPokemonsPerPage + '&offset=' + offset).toPromise();
  }

  getPokemonByUrl(url: string) {
    return this.http.get(url).toPromise();
  }

  getPreLoadedPokemonPage(pageIndex: number) {
    return this.pokemonPages[pageIndex];
  }
}
