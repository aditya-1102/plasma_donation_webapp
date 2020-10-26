import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { User } from './user';
import {UserService} from './user.service';
import {Router} from '@angular/router'
import { identifierModuleUrl } from '@angular/compiler';
import { SharedserviceService } from '../sharedservice.service';
import { MatSnackBar } from '@angular/material/snack-bar';

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
    private router:Router,
    private sharedservice:SharedserviceService,
    private _snackBar:MatSnackBar
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
      this.logincheck=data;
      this.sharedservice.updateMessage(this.logincheck);
      if(data.Role==""){
        alert("user not available!!!");
      }else if(data.Role=="User" || data.Role=="Admin"){
        this._snackBar.open('Login Successfull !😎','Success',{
          duration:3000
        });
        this.router.navigate(['/donor-reg']);
      }
    },err=>{
      this._snackBar.open('Error occured during login, Try again later!😎','Error',{
        duration:2000
      });
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
      this._snackBar.open('Now, Login with Registered Email and Password !😎','Success',{
        duration:3000
      });
      this.router.navigate(['/login'])
    },err=>{
      this._snackBar.open('An error occured during signup!😎','Error',{
        duration:2000
      });
      console.log(err);
    })
  }
}
