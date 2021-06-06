import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule ,ReactiveFormsModule} from '@angular/forms';

import { HttpClientModule } from '@angular/common/http';
import {UserServiceService} from "./user-service.service";
import { SecurityVerifyComponent } from './security-verify/security-verify.component';
@NgModule({
  declarations: [
    AppComponent,
    SecurityVerifyComponent
  ],
  imports: [
    BrowserModule,FormsModule ,ReactiveFormsModule,HttpClientModule,
    AppRoutingModule
  ],
  providers: [UserServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
