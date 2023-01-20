import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { retryWhen } from 'rxjs';
import { UserDetailsService } from 'src/app/services/user-details.service';

@Component({
  selector: 'app-user-login-form',
  templateUrl: './user-login-form.component.html',
  styleUrls: ['./user-login-form.component.css'],
})
export class UserLoginFormComponent implements OnInit {
  constructor(private loginAuth: UserDetailsService, private router: Router) {}
  hide = true;
  ngOnInit(): void {}
  onLogin(loginForm: NgForm) {
    if (loginForm.invalid) return;
    this.loginAuth.loginCheck(loginForm.value).subscribe((loginData) => {
      localStorage.setItem('id_token', loginData.token);
      if (loginData.token) this.router.navigateByUrl('/home');
    });
  }
}
