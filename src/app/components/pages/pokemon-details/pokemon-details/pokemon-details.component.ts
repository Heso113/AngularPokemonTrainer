import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PokemonAPIService } from 'src/app/services/pokemonAPI/pokemon-api.service';

@Component({
  selector: 'app-pokemon-details',
  templateUrl: './pokemon-details.component.html',
  styleUrls: ['./pokemon-details.component.scss']
})
export class PokemonDetailsComponent implements OnInit {

  pokemonId; 
  pokemon: any;

  constructor(private api: PokemonAPIService, private activeRoute: ActivatedRoute) {
   this.pokemonId = this.activeRoute.snapshot.paramMap.get('id');

   }


  async getPokemonDetails() {
    this.pokemon = await this.api.getPokemonDetails(Number(this.pokemonId));
  }

  
  ngOnInit(): void {
    this.getPokemonDetails();
  }
}
