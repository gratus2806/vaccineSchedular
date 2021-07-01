import { Component } from '@angular/core';
import { UserServiceService } from './user-service.service';
import {Router,ActivatedRoute} from "@angular/router";
import * as XLSX from 'xlsx';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  constructor(public userService: UserServiceService) {
    
  }
  
}
