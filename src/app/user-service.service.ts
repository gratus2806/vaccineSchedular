import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from 'rxjs';

import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  constructor(private http: HttpClient,private router: Router) { }
    userRegDetails(userRegData){
      return this.http.post('https://mysterious-cove-63204.herokuapp.com/api/user_details_reg',userRegData);
    }
    loginDetails(userData){
      return this.http.post('https://mysterious-cove-63204.herokuapp.com/api/user_details',userData);
    }
    getUserRegDetails(){
      return this.http.get('https://mysterious-cove-63204.herokuapp.com/api/getUser_details');
    }
  
}
 