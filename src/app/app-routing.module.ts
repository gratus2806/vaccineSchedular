import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {SecurityVerifyComponent} from './security-verify/security-verify.component'
const routes: Routes = [
  { path: 'secretCodeVerify', component: SecurityVerifyComponent }, 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
