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
  pokemonPages = new Array();
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
          let pokemonResult = await this.getPokemonByUrl(nextSetOfPokemons.results[p].url);
          let pokemonObject = this.buildPokemonObject(pokemonResult);
          nextPage.push(pokemonObject);
        }
        this.pokemonPages.push(nextPage);
      }
    }
  }

  private getAllPokemons(): any {
    return this.http.get(this.url + 'pokemon?limit=1050&offset=0').toPromise();
  }

  private getPokemonPage(pageIndex: number): any {
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

/*Reusable pokemon object builder */
  private buildPokemonObject(pokemon: any): any {
    let pokemonName = pokemon.name;
    let name = pokemonName.charAt(0).toUpperCase() + pokemonName.slice(1)
    let id = pokemon.id;
    let types = pokemon.types;
    let baseStats = pokemon.stats;
    let height = pokemon.height;
    let weight = pokemon.weight;
    let abilities = pokemon.abilities;
    let baseExperience = pokemon.base_experience;
    let moves = pokemon.moves;
    let imgUrl = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/' + pokemon.id + '.png';
    let pokemonObject = {
      baseStats: {imgUrl, types, baseStats, name, id},
      profile: {height, weight, abilities, baseExperience},
      moves
    };
    return pokemonObject;
  }

  /*Endpoint for other components to method getPokemonById*/
  async getPokemonDetails(id: number) {
    let pokemonResult = await this.getPokemonById(id);
    return this.buildPokemonObject(pokemonResult);
  }

  /*http get request from api to fetch specific pokemon by id*/ 
  private getPokemonById(id: number) {
    let url = this.url + `pokemon/${id}`;
    return this.http.get(url).toPromise();
  }
}
