import { Injectable } from '@angular/core';



@Injectable({
  providedIn: 'root'
})
export class SessionService {

  loggedIn = false;
  showPokemonCatalogue = false;
 
  constructor() { }

  
  isLoggedIn() {
    return this.loggedIn;
  }

  logIn() {
    this.loggedIn = true;
  }

  logOut() {
    localStorage.removeItem('trainerName');
    localStorage.removeItem('trainerCollection');
    this.loggedIn = false;
  }

  userExists() {
    if (this.getTrainerName() !== '') {
      return true;
    } else {
      return false;
    }
  }

  saveLogin(trainerName: string) {
    localStorage.setItem('trainerName', trainerName);
  }

  getTrainerName(): string {
    return localStorage.getItem('trainerName') || '';
  }

  getStateOfShowPokemonCatalogue() {
    return this.showPokemonCatalogue;
  }

  setStateOfShowPokemonCatalogue(showPokemonCatalogue: boolean) {
    this.showPokemonCatalogue = showPokemonCatalogue;
  }
}
