import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth/auth.service';
import { SessionService } from 'src/app/services/session/session.service';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent implements OnInit {


  /* If an object is saved, redirect to dashboard */
  constructor(private session: SessionService, private router: Router, private auth: AuthService) { 
    if (this.session.get() !== '') {
      this.router.navigateByUrl('/trainerPage');
    }
   }

  
  loginForm: FormGroup = new FormGroup ({
    trainerName: new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(30)])
  });

  get trainerName() {
    return this.loginForm.get('trainerName');
  }

  onLoginClicked() {
    try {
      this.session.save(this.loginForm.value.trainerName);
    } catch (e) {
      console.error(e.error);
    } finally {
      console.log(this.trainerName);
      this.router.navigate(['/trainerPage']);
    }
  }

  ngOnInit(): void {
  }
}
