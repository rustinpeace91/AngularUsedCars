import { Component, OnInit } from '@angular/core';
import { Car } from '../car';
import { CARS } from '../mock-cars';

@Component({
  selector: 'app-cars-for-sale',
  templateUrl: './cars-for-sale.component.html',
  styleUrls: ['./cars-for-sale.component.css']
})
export class CarsForSaleComponent implements OnInit {
  cars = CARS;
  selectedCar: Car;
  constructor() { }

  ngOnInit() {
  }

  onSelect(car: Car): void {
    this.selectedCar = car;
  }

}
