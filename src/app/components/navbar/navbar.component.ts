import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { UserDetailsService } from 'src/app/services/user-details.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit, OnDestroy {
  userIsAuthenticted!: boolean;
  private isAuthListenerSub!: Subscription;
  constructor(private loginService: UserDetailsService) {}

  ngOnInit(): void {
    this.isAuthListenerSub = this.loginService
      .getIsAuthListener()
      .subscribe((isAuth) => {
        this.userIsAuthenticted = isAuth;
        console.log(this.userIsAuthenticted);
        
      });
  }
  userLogout(){
    this.userIsAuthenticted=false;
    this.loginService.logout();
  }
  ngOnDestroy(): void {
    this.isAuthListenerSub.unsubscribe();
  }
}
