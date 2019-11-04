import { Component, OnInit } from '@angular/core';
import {FireAuthService} from '../service/fire-auth.service';
import{Observable} from'rxjs';
import{AuthUser} from '../share/authUser';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  user:Observable<AuthUser>;
  
  constructor(public auth:FireAuthService) {
    this.user=this.auth.data();
    console.log(this.user);
   }

  ngOnInit() {
  }
login(){
  this.auth.loginWithGoogle();
}
logout(){
  this.auth.logout();
}
}
