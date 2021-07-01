import { Component, OnInit,Pipe, PipeTransform } from '@angular/core';
import { UserServiceService } from '../user-service.service';
import {Router,ActivatedRoute} from "@angular/router";
import * as XLSX from 'xlsx';
@Component({
  selector: 'app-user-registraton-page',
  templateUrl: './user-registraton-page.component.html',
  styleUrls: ['./user-registraton-page.component.css']
})

export class UserRegistratonPageComponent implements OnInit {
  userRegData;
  userData;
  selectedGender="Gender / लिंग निवडा";
  // village="Select Village / गाव निवडा";
  // parish="Select Parish / पॅरिष निवडा";
  selectedHistory="Any Medical History";
  selectedDose="Select Dose / डोस निवडा"
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
  parishName;
  dataAvailablity;
  showDataavailDiv;
  loadingForm;
  fileName="TaskForce Influnza.xlsx"
  userList;
  userDataTable;
  onuserdatatable=true;
  secondDoseSelected;
  dose1Date;
  linkValue;
  linkDataValidation;
  saveUsername1=true;
  public saveUsername:boolean;
  constructor(public userService: UserServiceService, private router: Router) {
    this.UserRegPageChield=true;
    this.userService.getUserRegDetails().subscribe(data => {
      console.log("userList",data)
      this.userList=data['userAuth'];
    })
   }

  ngOnInit(): void {
    this.userService.RegLinkVerify().subscribe(data => {
      console.log("LinkValidation",data['LinkDetails'][0].linkData)
      this.linkDataValidation = data['LinkDetails'][0].linkData
    })
  }
  public onSaveUsernameChanged(value:boolean){
    this.saveUsername = value;
    console.log(">>>>>",this.saveUsername)
    this.linkValue={
      linkActive:this.saveUsername
    }
    this.userService.linkDetails(this.linkValue).subscribe(data => {
    console.log("linkData",data['result'][5][0].linkData)
    this.linkDataValidation=data['result'][5][0].linkData;
    })

  }
  selectedInput(event) {
    let selected = event.target.value;
    if(selected=="Dose 2"){
      this.secondDoseSelected=true;
     
    } else{
      this.secondDoseSelected=false;
    }
    console.log(">>>>>",selected)
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
      SecretCode:Math.floor(1314 + Math.random() * 9000),
      dose1Date:this.dose1Date
    }
    
    if(this.userRegData.Gender!="Gender" && this.userRegData.childName!="" && this.userRegData.Age!="" && this.userRegData.parentName!="" && this.userRegData.mobileNo!="" && this.userRegData.Village!="" && this.userRegData.Parish!="" ){
      var str = new String(this.userRegData.mobileNo) 
      var mobNoLen = str.length
      if(mobNoLen==10){
        this.loadingForm=true;
        this.userService.userRegDetails(this.userRegData).subscribe(data => {
          if(data['status']==true){
            this.loadingForm=false;
            this.successfull=true;
            setTimeout(() => {
              console.log('hide');
              this.successfull = false;
              window.location.reload();
            }, 3000);
          }else{
            if(data['dataAvailableStatus']==true){
              this.dataAvailablity="Child Data already Exists...";
              this.showDataavailDiv=true;
              setTimeout(() => {
                console.log('hide');
                this.showDataavailDiv = false;
                
              }, 3000);
            }else{
              this.loadingForm=false;
              this.failed=true;
              setTimeout(() => {
                console.log('hide');
                this.failed = false;
                
              }, 3000);
            }
            
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
      this.parishName = data['parishName']
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

  back(){
    this.userDataTable=false;
    this.onuserdatatable=true;
    this.UserSecurityVerify=false;
    this.UserRegPageChield=true;
  }
  exportExcel(){
    this.userDataTable=true;
    this.onuserdatatable=false;
    this.UserSecurityVerify=false;
    this.UserRegPageChield=false;
  }
  exportExcelSheet(){
     let element = document.getElementById('excel-table');
    const ws:XLSX.WorkSheet = XLSX.utils.table_to_sheet(element);
    const wb:XLSX.WorkBook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb,ws,'sheet1');
    XLSX.writeFile(wb,this.fileName)
  }
}
