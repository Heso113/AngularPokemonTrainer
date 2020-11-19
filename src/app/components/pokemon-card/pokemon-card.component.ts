import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-pokemon-card',
  templateUrl: './pokemon-card.component.html',
  styleUrls: ['./pokemon-card.component.scss'],
})
export class PokemonCardComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  @Input() pokemon: any;

/*Go to detailed Pokemon card by pokemon id */
  goToPokemonDetailsById() {
    console.log(this.pokemon);
    this.router.navigateByUrl(`/pokemonDetails/${this.pokemon.baseStats.id}`);
  }

}
