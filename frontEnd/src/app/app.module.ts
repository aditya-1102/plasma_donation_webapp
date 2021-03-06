import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './component/header/header.component';
import { FooterComponent } from './component/footer/footer.component';
import {HttpClientModule} from '@angular/common/http';

import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import { LoginSignupComponent } from './component/login-signup/login-signup.component';
import {MatTableModule} from '@angular/material/table';
import {MatTabsModule} from '@angular/material/tabs';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatCardModule} from '@angular/material/card';
import {MatRadioModule} from '@angular/material/radio';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from  '@angular/material/list';
import {MatSelectModule} from '@angular/material/select';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {FormsModule, ReactiveFormsModule} from '@angular/forms'
import {MatDividerModule} from '@angular/material/divider';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatExpansionModule} from '@angular/material/expansion';
import {Ng2SearchPipeModule} from 'ng2-search-filter';
import {MatMenuModule} from '@angular/material/menu';
import { MainComponentComponent } from './component/main-component/main-component.component';
import { CovidTrackerComponent } from './component/covid-tracker/covid-tracker.component';
import { AboutUsComponent } from './component/about-us/about-us.component';
import { DosDontsComponent } from './component/dos-donts/dos-donts.component';
import { DonorRegComponent } from './component/donor-reg/donor-reg.component';
import { SharedserviceService } from './component/sharedservice.service';
import { DonorsListComponent } from './component/donors-list/donors-list.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    LoginSignupComponent,
    MainComponentComponent,
    CovidTrackerComponent,
    AboutUsComponent,
    DosDontsComponent,
    DonorRegComponent,
    DonorsListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    HttpClientModule,
    MatIconModule,
    MatButtonModule,
    MatTableModule,
    MatTabsModule,
    MatFormFieldModule,
    MatInputModule,
    MatCardModule,
    MatRadioModule,
    MatSidenavModule,
    MatListModule,
    MatSelectModule,
    MatSnackBarModule,
    FormsModule,
    ReactiveFormsModule,
    MatDividerModule,
    MatGridListModule,
    MatMenuModule,
    MatExpansionModule,
    Ng2SearchPipeModule
  ],
  providers: [SharedserviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
