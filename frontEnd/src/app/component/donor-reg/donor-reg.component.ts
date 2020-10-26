import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { UserService } from '../login-signup/user.service';
import { SharedserviceService } from '../sharedservice.service';

@Component({
  selector: 'app-donor-reg',
  templateUrl: './donor-reg.component.html',
  styleUrls: ['./donor-reg.component.scss']
})
export class DonorRegComponent implements OnInit {
  userObj: any={};
  updateForm:FormGroup;

  constructor(private sharedService:SharedserviceService,
    private fb:FormBuilder,
    private userService:UserService,
    private router:Router,
    private _snackBar:MatSnackBar) { }

  ngOnInit(): void {
    this.sharedService.currentData.subscribe(data =>{   
      if(data==''){
        this.userObj=null;
      }else{
        this.userObj=data;
        
      }
    },err =>{
      console.log(err);
    });
    this.createUpdateForm();
  }

  createUpdateForm(){       //SIGNUP FORM GROUP
    this.updateForm=this.fb.group({
      bloodGroup:['',Validators.required],
      covidTestDate:['',Validators.required],
      coronaType:['',Validators.required],
      doctorName:['',Validators.required],
      hospitalName:['',Validators.required],
      covidCuredDate:['',Validators.required],
      Contact:['',Validators.required],
      Address:['',Validators.required],
      City:['',Validators.required],
      State:['',Validators.required],
      Willing:['',Validators.required]
    })
  }
  update(){
    this.updateForm.value._id=this.userObj._id;
    console.log(this.updateForm.value);
    this.userService.updateUser(this.updateForm.value).subscribe(data=>{
      this._snackBar.open('Successfully Registered as Donor!😎','Success',{
        duration:2000
      });
      this.router.navigate(['/main-component']);
    },err=>{
      this._snackBar.open('An Error Occured!!','Error!!',{
        duration:2000
      });
    });
  }

}
