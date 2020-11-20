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
  pokemonMoves = new Array();

  constructor(private api: PokemonAPIService, private activeRoute: ActivatedRoute) {
   this.pokemonId = this.activeRoute.snapshot.paramMap.get('id');

   }


  async getPokemonDetails() {
    this.pokemon = await this.api.getPokemonDetails(Number(this.pokemonId));
    this.pokemon.moves.map(async (move: any) =>{
      let moveResult = await this.api.getPokemonMoveDetails(move.move.url)
      console.log(moveResult);
      let moveDetails = {
        name: moveResult.name,
        damage: moveResult.power,
        damageType: moveResult.damage_class.name,
        description: moveResult.effect_entries[0].effect,

      }
      this.pokemonMoves.push(moveDetails)
    })
  }

  // power, flavor_text_entries [0]-> flavor_text
  
  ngOnInit(): void {
    this.getPokemonDetails();
  }
}
