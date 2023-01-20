import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../models/user.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserDetailsService {

  constructor(private http:HttpClient) { }
  addUser(user:User):Observable<{message:string,isAdded:boolean}>{
    return this.http.post<{message:string,isAdded:boolean}>('http://localhost:3000/api/user/signup',user);
  }
  loginCheck(user:User):Observable<{token:string}>{
    return this.http.post<{token:string}>('http://localhost:3000/api/user/login',user);
  }
}
