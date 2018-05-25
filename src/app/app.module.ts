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


@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    TitleComponent,
    CarsForSaleComponent,
  ],
  imports: [
    MaterialModule,
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
