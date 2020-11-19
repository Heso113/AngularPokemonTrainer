import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';


@Injectable({
  providedIn: 'root'
})
export class SessionService {

  constructor() { }

  
  saveLogin(trainerName: string) {
    localStorage.setItem('trainerName', trainerName);
  }

  getTrainerName(): string {
    return localStorage.getItem('trainerName') || '';
  }


}
