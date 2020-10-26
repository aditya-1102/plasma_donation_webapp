import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CovidTrackerComponent } from './component/covid-tracker/covid-tracker.component';
import { DonorRegComponent } from './component/donor-reg/donor-reg.component';
import { DonorsListComponent } from './component/donors-list/donors-list.component';
import { HeaderComponent } from './component/header/header.component';
import { LoginSignupComponent } from './component/login-signup/login-signup.component';
import { MainComponentComponent } from './component/main-component/main-component.component';

const routes: Routes = [
  {path:'',redirectTo:'main-component',pathMatch:"full"},
  {path:'main-component',component:MainComponentComponent},
  {path:'login',component:LoginSignupComponent},
  {path:'main-component/:firstName',component:MainComponentComponent},
  {path:'donor-reg',component:DonorRegComponent},
  {path:'covid-stats',component:CovidTrackerComponent},
  {path:'donors-list',component:DonorsListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
