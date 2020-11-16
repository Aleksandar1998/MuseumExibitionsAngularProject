import { RouterModule } from '@angular/router';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { userAuthService } from '../userAuthService';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit,OnDestroy {

  constructor(private userAuth : userAuthService) { }
  subscription : Subscription;
  isLoggedIn;
  ngOnInit(): void {
    this.subscription = this.userAuth.loggedIn.subscribe(data =>{
      this.isLoggedIn = data;
    })
  }
  logOut(){
    this.userAuth.logOut();
  }
  ngOnDestroy(){ 
    this.subscription.unsubscribe();
  }
}
