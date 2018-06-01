import { Component, OnInit } from '@angular/core';
import { Car } from '../car';
import { CARS } from '../mock-cars';
import { Router } from '@angular/router';
//figuring out a way to set canGoBack to false when page loads
import { DashboardService } from '../dashboard.service';


@Component({
  selector: 'app-cars-for-sale',
  templateUrl: './cars-for-sale.component.html',
  styleUrls: ['./cars-for-sale.component.css']
})
export class CarsForSaleComponent implements OnInit {
  cars = CARS;
  selectedCar: Car;


  constructor(private dashBoardService: DashboardService) { }

  ngOnInit() {
    this.setIsHome();
    console.log(this.dashBoardService.getIsHome());
  }

  onSelect(car: Car): void {
    this.selectedCar = car;
  }

  setIsHome() : void {
    this.dashBoardService.setIsHome(false);
  }

}
