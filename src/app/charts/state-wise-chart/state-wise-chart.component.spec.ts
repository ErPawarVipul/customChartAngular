import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StateWiseChartComponent } from './state-wise-chart.component';

describe('StateWiseChartComponent', () => {
  let component: StateWiseChartComponent;
  let fixture: ComponentFixture<StateWiseChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StateWiseChartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StateWiseChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
