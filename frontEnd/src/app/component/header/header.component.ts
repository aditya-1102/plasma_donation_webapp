import { Component, Inject, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { SharedserviceService } from '../sharedservice.service';
import {User} from '../login-signup/user';
import {DOCUMENT} from "@angular/common";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  userObj:any={};
  isHidden:boolean=true;
  details:any={};
  detail:any={};
  currentUserDetails:any=[];
  currentUserName:any;
  constructor(private sharedservice:SharedserviceService,
    private router:Router,
    @Inject(DOCUMENT) private _document:Document) { }

  ngOnInit(): void {
    this.sharedservice.currentData.subscribe(data=>{
      if(data==''){
        this.isHidden=true;
      }else{
        this.currentUserDetails=data;
        this.currentUserName=this.currentUserDetails.firstName;
        this.isHidden=false;
      }
    },err=>{
      console.log(err);
    });
  }

  navigateToDonorReg(){
    this.sharedservice.currentData.subscribe(data=>{
      this.details=data;
      if(data==''){
        this.router.navigate(['/login'])
      }else{
        this.router.navigate(['/donor-reg'])
      }
    });
  }

  navigateToLogin(){
    this.isHidden=true;
    this._document.defaultView.location.reload();
    this.router.navigate(['/main-component']);
  }

}
