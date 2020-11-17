import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth/auth.service';
import { SessionService } from 'src/app/services/session/session.service';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent implements OnInit {

  constructor(private session: SessionService, private router: Router, private auth: AuthService) { 
    if (this.session.get() !== '') {
      this.router.navigateByUrl('/trainerPage');
    }
   }

  trainer = {
    trainerName: ''
  }

  ngOnInit(): void {
  }

  onRegisterClicked() {
    try {
      this.session.save(this.trainer.trainerName);
    } catch (e) {
      console.error(e.error);
    } finally {
      this.router.navigate(['/trainerPage']);
    }
  }

}
