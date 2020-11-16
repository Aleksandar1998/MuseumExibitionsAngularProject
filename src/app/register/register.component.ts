import { FormsModule } from '@angular/forms';
import {NgForm} from '@angular/forms';
import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  constructor(private router: Router) { }

  ngOnInit(): void {
    let user = JSON.parse(localStorage.getItem('loggedInUser'));
    if(user){
      this.router.navigate(['/']);
    }

  }
  onSubmit(form:NgForm){
    if(form.form.status === "VALID"){
      let user = { name: form.form.controls.name.value, surname: form.form.controls.surname.value, adress: form.form.controls.adress.value,email: form.form.controls.email.value,password: form.form.controls.password.value, pref:form.form.controls.radio.value};
      localStorage.setItem('registeredUser',JSON.stringify(user));
      alert("You are registered!");
      this.router.navigate(['/signIn']);
    }
    else{
      alert("Fill in the form properly!")
    }
  }

}
