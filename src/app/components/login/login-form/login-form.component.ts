import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent implements OnInit {

  constructor() { }

  trainer = {
    trainerName: ''
  }

  ngOnInit(): void {
  }

  onRegisterClicked() {
    console.log(this.trainer.trainerName);
  }

}
