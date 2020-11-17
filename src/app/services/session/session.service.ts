import { Injectable } from '@angular/core';


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
