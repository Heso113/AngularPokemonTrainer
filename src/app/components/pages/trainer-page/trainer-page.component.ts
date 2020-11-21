import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PokemonAPIService } from 'src/app/services/pokemonAPI/pokemon-api.service';
import { SessionService } from 'src/app/services/session/session.service';
import { TrainercollectionService } from 'src/app/services/trainercollection/trainercollection.service';


@Component({
  selector: 'app-trainer-page',
  templateUrl: './trainer-page.component.html',
  styleUrls: ['./trainer-page.component.scss']
})
export class TrainerPageComponent implements OnInit {

  showPokemonCatalogue: boolean = false;
  pokemonCollection = new Array();
  pageTitle: string = "My Trainer Page";

  constructor(private session: SessionService, private router: Router, private api: PokemonAPIService, private collection: TrainercollectionService) {
    this.init();
  }

  ngOnInit(): void {
  }

  async init() {
    await this.api.initPokemonCatalogue();
    this.pokemonCollection = await this.collection.getTrainerCollection();
  }

  async onGetPokemonCatalogue() {
    this.showPokemonCatalogue = true;
    this.pageTitle = "Pokémon Catalogue";
    // this.router.navigateByUrl('/pokemonCatalogue')
  }

  onLogOutClicked() {
    this.session.logOut();
    this.router.navigateByUrl('startPage');
  }

  hidePokemonCatalogue() {
    console.log("inside parent hide poke cat");
    this.showPokemonCatalogue = false;
    console.log(this.showPokemonCatalogue);
    this.pageTitle = "My Trainer Page";
    console.log(this.pageTitle);
  }
}
