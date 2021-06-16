import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule} from '@angular/router';
import { AppRoutingModule} from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule ,ReactiveFormsModule} from '@angular/forms';

import { HttpClientModule } from '@angular/common/http';
import {UserServiceService} from "./user-service.service";
import { SecurityVerifyComponent } from './security-verify/security-verify.component';
import { UserRegistratonPageComponent } from './user-registraton-page/user-registraton-page.component';
import { LoginRegComponent } from './login-reg/login-reg.component';
@NgModule({
  declarations: [
    AppComponent,
    SecurityVerifyComponent,
    UserRegistratonPageComponent,
    LoginRegComponent
  ],
  imports: [
    BrowserModule,FormsModule ,ReactiveFormsModule,HttpClientModule,
    AppRoutingModule,RouterModule
  ],
  providers: [UserServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
