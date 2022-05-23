import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './components/login/login.component';
import { RouterModule } from '@angular/router';
import { SharedModulesModule } from '../shared-modules/shared-modules.module';



@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    CommonModule,
    SharedModulesModule,
    RouterModule.forChild(
      [
        {
          path:"",
          component:LoginComponent
        }
    ]
    )
  ]
})
export class AuthModule { }
