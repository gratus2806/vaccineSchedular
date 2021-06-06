import { Component } from '@angular/core';
import { UserServiceService } from './user-service.service';
import {Router,ActivatedRoute} from "@angular/router";
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  userRegData;
  userData;
  selectedGender="Gender";
  selectedHistory="Any Medical History";
  selectedDose="Dose 1"
  childName;
  age;
  parentName;
  mobileNo;
  village;
  parish;
  userDetailMissMatch;
  userDetail;
  UserRegPageChield;
  UserSecurityVerify;
  secNo;
  mobNO;
  verifiedSuccess;
  verifiedFailed;
  successfull;
  failed;
  constructor(public userService: UserServiceService, private router: Router) {
    this.UserRegPageChield=true;
  }
  onSubmitRegistrationForm(){
    
    this.userRegData= {
      childName: this.childName,
      Age: this.age,
      parentName:this.parentName,
      mobileNo:this.mobileNo,
      Village:this.village,
      Parish:this.parish,
      Gender:this.selectedGender,
      selectedHistory:this.selectedHistory,
      selectedDose:this.selectedDose,
      SecretCode:Math.floor(1314 + Math.random() * 9000)
    }
    if(this.userRegData.Gender!="Gender" && this.userRegData.childName!="" && this.userRegData.Age!="" && this.userRegData.parentName!="" && this.userRegData.mobileNo!="" && this.userRegData.Village!="" && this.userRegData.Parish!="" ){
      var str = new String(this.userRegData.mobileNo) 
      var mobNoLen = str.length
      if(mobNoLen==10){
        this.userService.userRegDetails(this.userRegData).subscribe(data => {
          if(data['status']==true){
            this.successfull=true;
            setTimeout(() => {
              console.log('hide');
              this.successfull = false;
              window.location.reload();
            }, 3000);
          }else{
            this.failed=true;
            setTimeout(() => {
              console.log('hide');
              this.failed = false;
              
            }, 3000);
          }
          
        })
      }else{
       
        this.userDetailMissMatch = true;
        setTimeout(() => {
          console.log('hide');
          this.userDetailMissMatch = false;
        }, 3000);
      }

    }else{
      this.userDetail=true;
      setTimeout(() => {
        console.log('hide');
        this.userDetail = false;
      }, 3000);
      console.log("user data 2",this.userRegData)
    }
    
    
    
  }
  securityVerification(){
    this.UserRegPageChield = false;
    this.UserSecurityVerify = true;
  }
  onSubmitVerify(){
    this.userData={
      secNo: this.secNo,
      mobNO: this.mobNO,
    }
    
    this.userService.loginDetails(this.userData).subscribe(data => {
      console.log("Verified_data",data);
      if(data['status']==true){
        this.verifiedSuccess=true;
        setTimeout(() => {
          console.log('hide');
          this.verifiedSuccess = false;
         
        }, 3000);
        this.verifiedFailed=false;
      }else{
        this.verifiedSuccess=false;
        this.verifiedFailed=true;
        setTimeout(() => {
          console.log('hide');
          this.verifiedFailed = false;
        }, 3000);
      }
    })
  }
  regform(){
    this.UserRegPageChield = true;
    this.UserSecurityVerify = false;
  }
}
