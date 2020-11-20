import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
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

  constructor(private api: PokemonAPIService, private activeRoute: ActivatedRoute, private collection: TrainercollectionService) {
   this.pokemonId = this.activeRoute.snapshot.paramMap.get('id');

   }


  async getPokemonDetails() {
    this.pokemon = await this.api.getPokemonDetails(Number(this.pokemonId));
  }

  addPokemonToTrainerCollection(id: number) {
    this.collection.addPokemonToTrainerCollection(id);
  }

  removePokemonFromTrainerCollection(id: number) {
    this.collection.removePokemonFromCollection(id);
  }

  
  ngOnInit(): void {
    this.getPokemonDetails();
  }
}
