import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PokemonAPIService {

  url = 'https://pokeapi.co/api/v2/';
  pokemonCount = 0;
  numberOfPages = 0;
  nrOfPokemonsPerPage = 50;
  pokemonPages = [];
  initialized = false;

  constructor(private http: HttpClient) {
  }

  async initPokemonCatalogue() {
    if (!this.initialized) {
      this.initialized = true;
      let pokemonInfo = await this.getAllPokemons();
      this.pokemonCount = pokemonInfo.count;
      this.numberOfPages = this.pokemonCount / this.nrOfPokemonsPerPage;
      for (let i = 0; i < this.numberOfPages; i++) {
        let nextSetOfPokemons = await this.getPokemonPage(i);
        let nextPage = [];
        for (let p = 0; p < this.nrOfPokemonsPerPage; p++) {
          let nextPokemon = await this.getPokemonByUrl(nextSetOfPokemons.results[p].url);
          let name = nextSetOfPokemons.results[p].name;
          let id = nextPokemon.id;
          let types = nextPokemon.types;
          let baseStats = nextPokemon.stats;
          let height = nextPokemon.height;
          let weight = nextPokemon.weight;
          let abilities = nextPokemon.abilities;
          let baseExperience = nextPokemon.base_experience;
          let moves = nextPokemon.moves;
          let imgUrl = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/' + nextPokemon.id + '.png';
          let pokemonObject = {
            baseStats: {imgUrl, types, baseStats, name, id},
            profile: {height, weight, abilities, baseExperience},
            moves
          };
          nextPage.push(pokemonObject);
        }
        this.pokemonPages.push(nextPage);
      }
      console.log(this.pokemonPages);
    }
    let pokemon = {
      baseStats: {Image: 3, types: 3, baseStats: 3, name: 3},
      profile: {height: 3, weight: 3, abilities: 3, baseExperience: 3},
      moves: ['move1', 'move2', 'move3', 'move4']
    }
    pokemon.baseStats.Image
  }

  private getAllPokemons() {
    return this.http.get(this.url + 'pokemon?limit=1050&offset=0').toPromise();
  }

  private getPokemonPage(pageIndex: number) {
    const offset = pageIndex * this.nrOfPokemonsPerPage;
    return this.http.get(this.url + 'pokemon?limit=' + this.nrOfPokemonsPerPage + '&offset=' + offset).toPromise();
  }

  private getPokemonByUrl(url: string) {
    return this.http.get(url).toPromise();
  }

  getPreLoadedPokemonPage(pageIndex: number) {
    return this.pokemonPages[pageIndex];
  }

  getAllPreLoadedPokemonPages() {
    return this.pokemonPages;
  }
}
