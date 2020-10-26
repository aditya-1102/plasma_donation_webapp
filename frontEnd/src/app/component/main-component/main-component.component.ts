import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { UserService } from '../login-signup/user.service';
import { SharedserviceService } from '../sharedservice.service';

@Component({
  selector: 'app-main-component',
  templateUrl: './main-component.component.html',
  styleUrls: ['./main-component.component.scss']
})
export class MainComponentComponent implements OnInit {
  
  constructor(
    private router:Router,
    private route:ActivatedRoute,
    private userService:UserService,
    private sharedService:SharedserviceService
  ) { }

  ngOnInit(): void {
  }

}
