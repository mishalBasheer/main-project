import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { FlexLayoutModule } from '@angular/flex-layout';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { UserSignupFormComponent } from './components/user-signup-form/user-signup-form.component';
import { UserLoginFormComponent } from './components/user-login-form/user-login-form.component';
import { AdminLoginFormComponent } from './components/admin-login-form/admin-login-form.component';
import { UserHomeComponent } from './components/user-home/user-home.component';
import { AdminHomeComponent } from './components/admin-home/admin-home.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    UserSignupFormComponent,
    UserLoginFormComponent,
    AdminLoginFormComponent,
    UserHomeComponent,
    AdminHomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    FlexLayoutModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
