import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../models/user.model';
import { Observable, Subject } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class UserDetailsService {
  private isAuthenticated:boolean=false;
  private isAuthListener = new Subject<boolean>();
  constructor(private http: HttpClient,private router:Router) {}
  addUser(user: User): Observable<{ message: string; isAdded: boolean }> {
    return this.http.post<{ message: string; isAdded: boolean }>(
      'http://localhost:3000/api/user/signup',
      user
    );
  }
  loginCheck(user: User) {
    this.http
      .post<{token:string}>('http://localhost:3000/api/user/login', user)
      .subscribe((loginData) => {
        localStorage.setItem('id_token', loginData.token);
        if(loginData.token){
          this.isAuthenticated=true;
          this.isAuthListener.next(true);
          this.router.navigateByUrl('/home');
        }
      });
  }
  getIsAuthListener(){
    return this.isAuthListener.asObservable();
  }
  logout(){
    this.isAuthenticated=false;
    localStorage.removeItem('id_token');
    this.router.navigateByUrl('/');
  }
}
