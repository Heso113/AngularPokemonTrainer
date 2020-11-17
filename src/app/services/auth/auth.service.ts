import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  login(): string {
    return localStorage.getItem('trainerName') || '';
  }

}
