import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SessionService } from 'src/app/services/session/session.service';


@Component({
  selector: 'app-trainer-page',
  templateUrl: './trainer-page.component.html',
  styleUrls: ['./trainer-page.component.scss']
})
export class TrainerPageComponent implements OnInit {

  constructor(private session: SessionService, private router: Router) { }

  ngOnInit(): void {
  }


  async onGetPokemonCatalogue() {
    if (this.session.get() !== '') {
      this.router.navigateByUrl('/pokemonCatalogue');
    } else {
      this.router.navigateByUrl('/loginForm');
    }
  }

}
