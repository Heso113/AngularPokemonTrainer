import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginFormComponent } from './components/login/login-form/login-form.component';
import { LoginPageComponent } from './components/login/login-page/login-page.component';

const routes: Routes = [
  {
    path: 'loginPage',
    component: LoginPageComponent
  },
  {
    path:'loginForm',
    component: LoginFormComponent
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '/loginPage'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
