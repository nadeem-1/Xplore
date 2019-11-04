import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import {FireAuthService} from '../service/fire-auth.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private auth:FireAuthService) { }
 
  email = new FormControl('');
  ngOnInit() {
  }
  login(){
    
    this.auth.loginWithGoogle();
   
  }

}
