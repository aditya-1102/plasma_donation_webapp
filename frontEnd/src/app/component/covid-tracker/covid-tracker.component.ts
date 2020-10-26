import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Corona } from 'src/app/corona';
import { CoronaService } from 'src/app/corona.service';

@Component({
  selector: 'app-covid-tracker',
  templateUrl: './covid-tracker.component.html',
  styleUrls: ['./covid-tracker.component.scss']
})
export class CovidTrackerComponent implements OnInit {
  reports:any={};
  countryreports:any=[];
  search:string;
  // displayedColumns:String[]=['country','cases','todayCases','deaths','todayDeaths','recovered','active','critical','casesPerOneMillion','deathsPerOneMillion','tests','testsPerOneMillion'];
  // dataSource = new MatTableDataSource<Corona>(this.ELEMENT_DATA);
  constructor(private CoronaService:CoronaService) { }

  ngOnInit(): void {
    this.CoronaService.covidreports().subscribe(data=>{
      this.reports=data;
      this.countryreports=this.reports.Countries;
      console.log(this.countryreports);
    })
  }

}
