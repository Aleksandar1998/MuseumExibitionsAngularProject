import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class userAuthService {
  loggedIn: BehaviorSubject<boolean>;
  constructor() {
    let user = localStorage.getItem("loggedInUser");
    if(user){
      this.loggedIn = new BehaviorSubject<boolean>(true);
    }
    else{
      this.loggedIn = new BehaviorSubject<boolean>(false);
    }
  }
  logIn(user){
      localStorage.setItem("loggedInUser",JSON.stringify(user));
      this.loggedIn.next(true);
  }
  logOut(){
      this.loggedIn.next(false);
      localStorage.removeItem("loggedInUser");
  }
}