import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  constructor(private _snackBar:MatSnackBar) { }

  ngOnInit(): void {
  }
  alert(){
    this._snackBar.open('Thankyou for reaching to us','Success',{
      duration:2000
    });
  }
}
