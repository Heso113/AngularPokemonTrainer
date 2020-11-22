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

  showLoginForm: boolean = false;

  constructor(private session: SessionService, private router: Router, private api: PokemonAPIService) { 
  }

  ngOnInit(): void {
  }

  async onStartClicked() {
    try {
      this.session.logIn();
      if (this.session.userExists()) {
        this.router.navigateByUrl('/trainerPage');
      } else {
        this.showLoginForm = true;
      }
    } catch (e) {
      console.log(e.error);
    }
  }
}
