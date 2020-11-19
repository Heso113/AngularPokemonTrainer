import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PokemonAPIService } from 'src/app/services/pokemonAPI/pokemon-api.service';
import { SessionService } from 'src/app/services/session/session.service';


@Component({
  selector: 'app-start-page',
  templateUrl: './start-page.component.html',
  styleUrls: ['./start-page.component.scss']
})
export class StartPageComponent implements OnInit {

  constructor(private session: SessionService, private router: Router, private api: PokemonAPIService) { 
  }

  ngOnInit(): void {
  }

  async onStartClicked() {
    try {
      if (this.session.get() !== '') {
        this.router.navigateByUrl('/trainerPage');
      } else {
        this.router.navigateByUrl('/loginForm');
      }
    } catch (e) {
      console.log(e.error);
    }
  }
}
