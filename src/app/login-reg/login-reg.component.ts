import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login-reg',
  templateUrl: './login-reg.component.html',
  styleUrls: ['./login-reg.component.css']
})
export class LoginRegComponent implements OnInit {
  loadingForm:false;
  successfull;
  failed;
  userName;
  password;
  selectedRem="Remember Me";
  constructor() { }

  ngOnInit(): void {
  }
  onSubmitLoginForm(){
    console.log("in")
  }
}
