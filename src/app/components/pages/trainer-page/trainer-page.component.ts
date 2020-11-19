import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PokemonAPIService } from 'src/app/services/pokemonAPI/pokemon-api.service';
import { SessionService } from 'src/app/services/session/session.service';


@Component({
  selector: 'app-trainer-page',
  templateUrl: './trainer-page.component.html',
  styleUrls: ['./trainer-page.component.scss']
})
export class TrainerPageComponent implements OnInit {

  constructor(private session: SessionService, private router: Router, private api: PokemonAPIService) {
    this.api.initPokemonCatalogue();
  }

  ngOnInit(): void {
  }

  async onGetPokemonCatalogue() {
    try {
      if (this.session.getTrainerName() !== '') {
        this.router.navigateByUrl('/pokemonCatalogue');
      } else {
        this.router.navigateByUrl('/loginForm');
      }
    } catch (e) {
      console.log(e.error);
    }  
  }

}
