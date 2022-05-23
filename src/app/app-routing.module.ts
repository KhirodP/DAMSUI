import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthModule } from './Auth/auth.module';
import { HeadersModule } from './Components/headers/headers.module';

const routes: Routes = [
  {
    path:"",
    pathMatch:"full",
    loadChildren:()=> AuthModule
  },
  {
    path:"document",
    loadChildren:()=>HeadersModule
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
