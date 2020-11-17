import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SessionService } from 'src/app/services/session/session.service';


@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {

  constructor(private session: SessionService, private router: Router) { 
  }

  ngOnInit(): void {
  }

  onLoginClicked() {
    if (this.session.get() !== '') {
      this.router.navigateByUrl('/trainerPage');
    } else {
      this.router.navigateByUrl('/loginForm');
    }
  }
}
