import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SellCarComponent } from './sell-car.component';

describe('SellCarComponent', () => {
  let component: SellCarComponent;
  let fixture: ComponentFixture<SellCarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SellCarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SellCarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
