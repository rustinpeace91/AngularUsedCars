
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { Car } from './car';

const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({ providedIn: 'root' })

export class CarService {
    private carsUrl = 'api/cars'; 

    constructor(
        private http: HttpClient,
    ) { }

    getCars (): Observable<Car[]> {
    return this.http.get<Car[]>(this.carsUrl)
    }
}