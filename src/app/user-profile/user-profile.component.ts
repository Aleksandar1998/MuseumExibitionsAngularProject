import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit,AfterViewInit {
  @ViewChild("form") form : NgForm; 
  constructor(private router : Router) { }
  user;
  ngOnInit(): void {
    this.user = JSON.parse(localStorage.getItem('loggedInUser'));
    if(!this.user){
      this.router.navigate(['/']);
    }
  }
  ngAfterViewInit():void{
    console.log(this.user);
    this.user = JSON.parse(localStorage.getItem('loggedInUser'));
    if(this.user){
      setTimeout(() => {
        this.form.setValue({
          name: this.user.name,
          surname: this.user.surname,
          email: this.user.email,
          password: this.user.password,
          adress: this.user.adress,
          radio: this.user.pref
        });
      });
    }
  }
  onSubmit(form: NgForm){
    if(form.form.status === "VALID"){
      let user = { name: form.form.controls.name.value, surname: form.form.controls.surname.value, adress: form.form.controls.adress.value,email: form.form.controls.email.value,password: form.form.controls.password.value, pref:form.form.controls.radio.value};
      localStorage.setItem('registeredUser',JSON.stringify(user));
      localStorage.setItem('loggedInUser',JSON.stringify(user));
      alert("Profile updated!");
    }
    else{
      alert("Fill in the form properly!")
    }
  }
}
