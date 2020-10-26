import { Component, OnInit } from '@angular/core';
import { UserService } from '../login-signup/user.service';

@Component({
  selector: 'app-donors-list',
  templateUrl: './donors-list.component.html',
  styleUrls: ['./donors-list.component.scss']
})
export class DonorsListComponent implements OnInit {
  donorsList:any=[];
  constructor(private userService:UserService) { }

  ngOnInit(): void {
    this.userService.getUser().subscribe(data=>{
      this.donorsList=data.filter(item=>item.Willing==true)
      console.log(this.donorsList);
    })
  }

}
