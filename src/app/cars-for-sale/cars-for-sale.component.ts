import { Component, OnInit } from '@angular/core';
import { Car } from '../car';
import { CarService } from '../car.service';
// import { CARS } from '../mock-cars';
import { Router } from '@angular/router';
import { Observable, of } from 'rxjs';
//figuring out a way to set canGoBack to false when page loads
import { DashboardService } from '../dashboard.service';

import { HttpClient, HttpHeaders } from '@angular/common/http';


@Component({
  selector: 'app-cars-for-sale',
  templateUrl: './cars-for-sale.component.html',
  styleUrls: ['./cars-for-sale.component.css']
})
export class CarsForSaleComponent implements OnInit {
  cars: Car[];
  selectedCar: Car;


  constructor(
    private carService: CarService,
    private dashBoardService: DashboardService
  ) { }

  getCars(): void {
    this.carService.getCars()
    .subscribe(cars => this.cars = cars);
  }

  ngOnInit() {
    this.setIsHome();
    this.getCars();
    console.log(this.dashBoardService.getIsHome());
  }

  onSelect(car: Car): void {
    this.selectedCar = car;
  }

  setIsHome() : void {
    this.dashBoardService.setIsHome(false);
  }

}
