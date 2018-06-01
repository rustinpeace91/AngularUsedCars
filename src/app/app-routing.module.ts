import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarsForSaleComponent }      from './cars-for-sale/cars-for-sale.component';
import { SellCarComponent } from './sell-car/sell-car.component';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LandingPageComponent } from './landing-page/landing-page.component';

const routes: Routes = [
  { path: 'cars-for-sale', component: CarsForSaleComponent },
  { path: 'sell-your-car', component: SellCarComponent },
  { path: '', component: LandingPageComponent },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
