import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {

  constructor(private router: Router) { 
    // let trainerName = 'testName';
    // localStorage.setItem('trainerName', trainerName);
    if (localStorage.getItem('trainerName') === null) {
      this.router.navigate(['/loginForm']);
    } else {
      this.router.navigate(['/trainerPage']);
    }
  }

  ngOnInit(): void {
  }

}
