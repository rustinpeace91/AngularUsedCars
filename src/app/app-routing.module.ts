import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarsForSaleComponent }      from './cars-for-sale/cars-for-sale.component';
import { SellCarComponent } from './sell-car/sell-car.component';

const routes: Routes = [
  { path: 'cars-for-sale', component: CarsForSaleComponent },
  { path: 'sell-your-car', component: SellCarComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
