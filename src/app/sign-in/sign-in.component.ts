import { FormsModule } from '@angular/forms';
import {NgForm} from '@angular/forms';
import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { userAuthService } from '../userAuthService';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {
  constructor( private ruter : Router,private userAuthService : userAuthService) { }

  ngOnInit(): void {
    let user = JSON.parse(localStorage.getItem('loggedInUser'));
      if(user){
        this.ruter.navigate(['/']);
      }
  }
  onSubmit(form:NgForm){
    if(form.form.status === "VALID"){
      let user = JSON.parse(localStorage.getItem('registeredUser'));
      if(form.form.value.email == user.email && form.form.value.password == user.password){
        alert("You are logged in!");
        this.userAuthService.logIn(user);
        this.ruter.navigate(['/']);
      }
      else{
        alert("Wrong credentials");
        form.resetForm();
      }
    }
    else{
      alert("Form isn't valid");
      form.resetForm();
    }
  }
}
