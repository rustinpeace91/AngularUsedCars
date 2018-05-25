import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CarsForSaleComponent } from './cars-for-sale.component';

describe('CarsForSaleComponent', () => {
  let component: CarsForSaleComponent;
  let fixture: ComponentFixture<CarsForSaleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CarsForSaleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CarsForSaleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
