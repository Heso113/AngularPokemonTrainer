import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {

  constructor() { 
    let trainerName = 'testName';
    localStorage.setItem('trainerName', trainerName);
    console.log(localStorage.getItem('trainerName'));
  }

  ngOnInit(): void {
  }

}
