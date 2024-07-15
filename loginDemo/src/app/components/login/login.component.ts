import { Component, OnInit } from '@angular/core';
import { EmailValidator } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  signupUsers: any[] =[];
  signupObj:any ={
    userName: '',
    email: '',
    password:''
  };

  loginObj: any ={
    userName: '',
    password: ''
  }
  constructor() {}

  ngOnInit(): void {
    
  }

  onSignUp(){
    this.signupUsers.push(this.signupObj);
    localStorage.setItem('signupUsers', JSON.stringify(this.signupUsers));
    this.signupObj={
    userName: '',
    email: '',
    password:''
  };
  }

  onLogin(){

  }
}

