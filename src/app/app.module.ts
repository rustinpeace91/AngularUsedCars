import { BrowserModule }                    from '@angular/platform-browser';
import { NgModule }                         from '@angular/core';
import { HttpClientModule }                 from '@angular/common/http';
import { FormsModule }                      from '@angular/forms';

import { MaterialModule }                   from './material/material.module';
import { BrowserAnimationsModule}           from '@angular/platform-browser/animations';

import { AppComponent }                     from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { TitleComponent } from './title/title.component';
import { CarsForSaleComponent } from './cars-for-sale/cars-for-sale.component';
import { SellCarComponent } from './sell-car/sell-car.component';
import { AppRoutingModule } from './app-routing.module';
import { LandingPageComponent } from './landing-page/landing-page.component';

// IN MEMORY API 
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './in-memory-data.service';



@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    TitleComponent,
    CarsForSaleComponent,
    SellCarComponent,
    LandingPageComponent,
  ],
  imports: [
    MaterialModule,
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    // The HttpClientInMemoryWebApiModule module intercepts HTTP requests
    // and returns simulated server responses.
    // Remove it when a real server is ready to receive requests.
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false }
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
