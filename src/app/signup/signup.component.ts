import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import {FireAuthService} from '../service/fire-auth.service';
import{MustMatch} from '../PassMatch/matcher';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  public CreateAccount: FormGroup;
  hasError;
  constructor(private auth:FireAuthService) { }
 
 

  ngOnInit() {
    this.CreateAccount=new FormGroup({
      email:new FormControl('',[Validators.required,Validators.email]),
      pass:new FormControl('',[Validators.required, Validators.minLength(8)]),
      cpass:new FormControl('',[ Validators.required])
      
    });

    this.hasError = (controlName: string, errorName: string) =>{
      return this.CreateAccount.controls[controlName].hasError(errorName);
    }
  
    
  }
  userForm(data){

    alert(JSON.stringify(data));
    
  }

  
  login(){
    
    this.auth.loginWithGoogle();
   
  }
}
