import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginRegComponent } from './login-reg/login-reg.component';
import {SecurityVerifyComponent} from './security-verify/security-verify.component'
import { UserRegistratonPageComponent } from './user-registraton-page/user-registraton-page.component';

const routes: Routes = [
  // {path:'',component:UserRegistratonPageComponent},
  {path:'',component:UserRegistratonPageComponent},
  {path:'user_reg',component:UserRegistratonPageComponent},
  {path:'SecurityVerifyComponent',component:SecurityVerifyComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
