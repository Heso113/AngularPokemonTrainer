import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PokemonAPIService } from 'src/app/services/pokemonAPI/pokemon-api.service';
import { TrainercollectionService } from 'src/app/services/trainercollection/trainercollection.service';

@Component({
  selector: 'app-pokemon-details',
  templateUrl: './pokemon-details.component.html',
  styleUrls: ['./pokemon-details.component.scss']
})
export class PokemonDetailsComponent implements OnInit {

  pokemonId; 
  pokemon: any;
  pokemonMoves = new Array();


  constructor(private api: PokemonAPIService, private activeRoute: ActivatedRoute, private router: Router, private collection: TrainercollectionService) {
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

  addPokemonToTrainerCollection(id: number) {
    this.collection.addPokemonToTrainerCollection(id);
  }

  removePokemonFromTrainerCollection(id: number) {
    this.collection.removePokemonFromCollection(id);
  }


  onClickToTrainerPage() {
    this.router.navigateByUrl('/trainerPage');
 }

  onClickToPokemonCatalogue() {
    this.router.navigateByUrl('/pokemonCatalogue');
  }
  
  ngOnInit(): void {
    this.getPokemonDetails();
  }
}
