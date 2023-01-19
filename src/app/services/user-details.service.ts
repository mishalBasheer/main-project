import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../components/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserDetailsService {

  constructor(private http:HttpClient) { }
  addUser(user:User){
    this.http.post<User>('http://localhost:3000/api/user',user).subscribe((response)=>{
      console.log(response);
    });
  }
  loginCheck(user:User){
    this.http.post('http://localhost:3000/api/user/login',user).subscribe((response)=>{
      
    })
  }
}
