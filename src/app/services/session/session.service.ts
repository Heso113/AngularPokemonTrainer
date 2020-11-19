import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';


@Injectable({
  providedIn: 'root'
})
export class SessionService {

  constructor() { }

  
  save(trainerName: string) {
    localStorage.setItem('trainerName', trainerName);
  }

  get(): string {
    return localStorage.getItem('trainerName') || '';
  }


}
