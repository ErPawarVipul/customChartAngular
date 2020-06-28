import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CityWiseChartComponent } from './city-wise-chart.component';

describe('CityWiseChartComponent', () => {
  let component: CityWiseChartComponent;
  let fixture: ComponentFixture<CityWiseChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CityWiseChartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CityWiseChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
