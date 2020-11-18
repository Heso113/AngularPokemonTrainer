import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PokemonAPIService {

  url = 'https://pokeapi.co/api/v2/';
  nrOfPokemonCardsPerPage = 50;


  constructor(private http: HttpClient) {}

  
  getAllPokemons() {
    return this.http.get(this.url + 'pokemon?limit=1050&offset=0').toPromise();
  }

  getPokemonPage(pageIndex: number) {
    const offset = pageIndex * this.nrOfPokemonCardsPerPage;
    return this.http.get(this.url + 'pokemon?limit=' + this.nrOfPokemonCardsPerPage + '&offset=' + offset).toPromise();
  }

  getPokemonByUrl(url: string) {
    return this.http.get(url).toPromise();
  }
}
