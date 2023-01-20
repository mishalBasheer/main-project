import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UserDetailsService } from 'src/app/services/user-details.service';
import { User } from '../../models/user.model';

@Component({
  selector: 'app-user-signup-form',
  templateUrl: './user-signup-form.component.html',
  styleUrls: ['./user-signup-form.component.css'],
})
export class UserSignupFormComponent implements OnInit {
  constructor(public userService:UserDetailsService) {}

  ngOnInit(): void {}
  onAddUser(userData: NgForm) {
    if(userData.invalid)return;
    this.userService.addUser(userData.value).subscribe((response)=>{
      console.log(response);
    });
  }
}
