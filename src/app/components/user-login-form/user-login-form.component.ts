import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UserDetailsService } from 'src/app/services/user-details.service';

@Component({
  selector: 'app-user-login-form',
  templateUrl: './user-login-form.component.html',
  styleUrls: ['./user-login-form.component.css'],
})
export class UserLoginFormComponent implements OnInit {
  constructor(private loginService:UserDetailsService){}
  hide = true;
  ngOnInit(): void {}
  onLogin(loginForm: NgForm) {
    if (loginForm.invalid) return;
    this.loginService.loginCheck(loginForm.value);
  }
}
