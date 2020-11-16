import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { userAuthService } from '../userAuthService';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit,OnDestroy {
  constructor(private userAuth : userAuthService) {}
  subscription : Subscription;
  images = ['./landing.jpg','./landing.jpg','./landing.jpg'];
  searchExibitions = [];
  isLoggedIn;
  @ViewChild('exibitions') exibitions;


  ngOnInit(): void {
    this.subscription = this.userAuth.loggedIn.subscribe(data =>{
      this.isLoggedIn = data;
    })
  }
  ngOnDestroy(){ 
    this.subscription.unsubscribe();
  }
  search = (event) =>{
    const value = event.target.value.toUpperCase();
    if(value.length >= 1){
      console.log(this.exibitions.exibitions);
      this.searchExibitions = this.exibitions.exibitions.filter( exibition =>{
        return exibition.exibitionName.toUpperCase().includes(value);
      })
    }
  };

  lostFocus = () =>{
    setTimeout( () =>{
      this.searchExibitions = [];
    },300)
  }
}
