import { Injectable } from '@angular/core';
import { PokemonAPIService } from '../pokemonAPI/pokemon-api.service';

@Injectable({
  providedIn: 'root'
})
export class TrainercollectionService {

  trainerCollection = new Array();
 
  constructor(private api: PokemonAPIService) { 
    this.loadTrainerCollectionFromLocalStorage();
  }

  addPokemonToTrainerCollection(id: number) {
    this.trainerCollection.push(id);
    this.updateTrainerCollection();
  }

  removePokemonFromCollection(id: number) {
    let index = -1;
    for (let i = 0; i < this.trainerCollection.length; i++) {
      if (this.trainerCollection[i] === id || this.trainerCollection[i] === id.toString()) {
        index = i;
        break;
      }
    }
    if (index !== -1) {
      this.trainerCollection.splice(index, 1);
    }
    this.updateTrainerCollection();
  }

  getTrainerCollection() {
    this.loadTrainerCollectionFromLocalStorage();
    return this.api.getPokemonCollectionFromIds(this.trainerCollection);
  }

  private loadTrainerCollectionFromLocalStorage() {
    let collectionString = localStorage.getItem('trainerCollection');
    let arrayFromString = collectionString?.split(',');
    if (arrayFromString !== undefined) {
      this.trainerCollection = arrayFromString;
    } else {
      this.trainerCollection = new Array();
    }
  }

  private updateTrainerCollection() {
    localStorage.setItem('trainerCollection', this.trainerCollection.toString());
  }
}
