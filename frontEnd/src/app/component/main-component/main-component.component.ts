import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-main-component',
  templateUrl: './main-component.component.html',
  styleUrls: ['./main-component.component.scss']
})
export class MainComponentComponent implements OnInit {
  userName:String;
  constructor(
    private router:Router,
    private route:ActivatedRoute
  ) { }

  ngOnInit(): void {
    if (this.route.snapshot.paramMap.get('firstName')) {
      this.userName = this.route.snapshot.paramMap.get('firstName');
    }
  }

}
