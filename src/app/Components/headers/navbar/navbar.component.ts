import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  sidebar: boolean = false;
  user!:string;
  logUser:boolean=false;
  constructor(private router:Router) {}

  ngOnInit(): void {
   this.user=JSON.stringify(localStorage.getItem('user'));
  //  if(this.user==='akshay')
  //  {
  //     this.logUser=true;
  //  }
  //  else{
  //    this.logUser=false
  //  }

  //  if(this.user==='akshay')
  //  {
  //     this.router.navigate(['/home'])
  //  }
  //  else
  //  {
  //    this.router.navigate(['/login'])
  //  }
  }

  sideBar() {
    if (this.sidebar == false) {
      this.sidebar = true;
    } else {
      this.sidebar = false;
    }
  }

  logout(){
    localStorage.removeItem("user");
    this.router.navigate(['/'])
  }






  onClickHome(){
    this.router.navigate(['/home'])
    this.sideBar();
  }

  onClicDocMngmnt(){
    this.router.navigate(['/docManagement'])
    this.sideBar();
  }
  onClickBookmarks(){
    this.router.navigate(['/bookmarks'])
    this.sideBar();
  }

}
