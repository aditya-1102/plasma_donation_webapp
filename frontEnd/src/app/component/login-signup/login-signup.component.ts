import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { User } from './user';
import {UserService} from './user.service';
import {Router} from '@angular/router'
import { identifierModuleUrl } from '@angular/compiler';

@Component({
  selector: 'app-login-signup',
  templateUrl: './login-signup.component.html',
  styleUrls: ['./login-signup.component.scss']
})
export class LoginSignupComponent implements OnInit {
  form:FormGroup; 
  signupForm: FormGroup;
  loginForm:FormGroup;
  signupcheck:any=[];
  logincheck:any=[];
  constructor(
    private fb:FormBuilder,
    private userService:UserService,
    private router:Router
  ) { }

  ngOnInit(): void {
    this.createLoginForm();
    this.createSignupForm();
  }

  createLoginForm(){      //LOGIN FORM GROUP 
    this.loginForm=this.fb.group({
      Email:['',Validators.required],
      Password:['',Validators.required],
    })
  }
  login(){
    this.userService.loginUser(this.loginForm.value).subscribe(data=>{
      if(data.Role==""){
        alert("user not available!!!");
      }else if(data.Role=="User" || data.Role=="Admin"){
        alert("Login Successful!!");
        this.router.navigate(['/main-component',data.firstName]);
        console.log(this.logincheck.value)
      }
    },err=>{
      alert("an error occured, login failed");
      console.log(err);
    })
  }

  createSignupForm(){       //SIGNUP FORM GROUP
    this.signupForm=this.fb.group({
      firstName:['',Validators.required],
      lastName:['',Validators.required],
      Email:['',Validators.required],
      Password:['',Validators.required],
      Gender:['',Validators.required],
      Age:['',Validators.required],
    })
  }
  signup(){
    this.signupForm.value.createdDate=new Date();
    this.signupForm.value.Role="User";
    this.signupForm.value.isActive=true;
    // console.log(this.signupForm.value);
    this.userService.createUser(this.signupForm.value).subscribe(data=>{
      console.log(data);
      this.router.navigate(['/main-component'])
    },err=>{
      console.log(err);
    })
  }
}
