import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HeaderComponent } from './component/header/header.component';
import { LoginSignupComponent } from './component/login-signup/login-signup.component';
import { MainComponentComponent } from './component/main-component/main-component.component';


const routes: Routes = [
  {path:'',redirectTo:'main-component',pathMatch:"full"},
  {path:'main-component',component:MainComponentComponent},
  {path:'login',component:LoginSignupComponent},
  {path:'main-component/:firstName',component:MainComponentComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
