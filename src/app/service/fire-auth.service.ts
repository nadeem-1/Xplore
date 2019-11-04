import { Injectable } from '@angular/core';
import { AngularFireAuth} from '@angular/fire/auth';
import { Router } from "@angular/router";
import { Observable } from 'rxjs';
import * as firebase from 'firebase/app';

@Injectable({
  providedIn: 'root'
})
export class FireAuthService {
  
  private user:Observable<firebase.User>;
  private userDetails:firebase.User= null;
  authState:any=null;
  constructor(private afa:AngularFireAuth,private router:Router) {
    this.user = afa.authState;
    this.user.subscribe(
    (user) => {
    if (user) {

      this.userDetails = user;
      console.log(this.userDetails);
      this.router.navigate(['/blog']);
    }
    else {
      this.userDetails = null;
    }
  }
);

  this.afa.authState.subscribe(data =>this.authState = data);
   }


loginWithGoogle(){
    this.afa.auth.setPersistence(firebase.auth.Auth.Persistence.SESSION)
   .then(()=>{
     return this.afa.auth.signInWithPopup(
       new firebase.auth.GoogleAuthProvider()
     );
   })
   .catch(function(error) {
 
     var errorCode = error.code;
     var errorMessage = error.message;
     console.log(errorCode,errorMessage);
   });
 
 }
 
 
 isLoggedIn() {
   if (this.userDetails == null ) {
       return false;
     } else {
       return true;
     }
   }
  data(){
    return this.afa.user;
  }
 
logout() {
   this.afa.auth.signOut()
   .then((res) => this.router.navigate(['/home']));
 }
 
 get authenticated():boolean{
 return this.userDetails != null;
 }
 
 get currentUserId(){
 
   return this.authenticated ? this.userDetails.uid:null;
 }
 

}
