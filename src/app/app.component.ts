import { Component } from '@angular/core';
import { FormGroup,FormControl, FormBuilder, Validators } from '@angular/forms';
import { NgForm } from '@angular/forms'; 
import {ConfirmedValidator} from './validator'


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  unamePattern = "^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$";
  pwdPattern = "^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?!.*\s).{6,12}$";
  mobnumPattern = "^((\\+91-?)|0)?[0-9]{10}$"; 
  emailPattern = "^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$";
  show:Boolean = false;
  constructor(private forms:FormBuilder) {}

  isValidFormSubmitted = null;

  loginForm = this.forms.group({
    firstName:new FormControl('', [Validators.required, Validators.pattern(this.unamePattern)]),
    lastName:new FormControl('', [Validators.required, Validators.pattern(this.unamePattern)]),
    email:new FormControl('', [Validators.required, Validators.pattern("^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$")]),
    password:new FormControl('', [Validators.required, Validators.pattern('^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$')]),
    confirmPassword:new FormControl('', [Validators.required, Validators.pattern('^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$')]),

    }, {validator:ConfirmedValidator('password', 'confirmPassword')
    })
  ngOnInit() {}


  data(x:NgForm){
    
    
    console.log(x);
    this.loginForm.reset();
    
  }
  iconShow(){
    if(this.show===false){
      this.show = true;
      const showPassword = <HTMLElement> document.getElementById('exampleInputPassword1');
      showPassword.setAttribute('type', 'text');
    }
    else{
      this.show = false;
      const showPassword = <HTMLElement> document.getElementById('exampleInputPassword1');
      showPassword.setAttribute('type', 'password');
    }
    

  }
  
}
