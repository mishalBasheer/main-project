import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminHomeComponent } from './components/admin-home/admin-home.component';
import { AdminLoginFormComponent } from './components/admin-login-form/admin-login-form.component';
import { UserHomeComponent } from './components/user-home/user-home.component';
import { UserLoginFormComponent } from './components/user-login-form/user-login-form.component';
import { UserSignupFormComponent } from './components/user-signup-form/user-signup-form.component';

const routes: Routes = [
  { path: '', component: UserLoginFormComponent },
  { path: 'signup', component: UserSignupFormComponent },
  { path: 'home', component: UserHomeComponent },
  { path: 'login', component: AdminLoginFormComponent },
  { path: 'admin', component: AdminHomeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
