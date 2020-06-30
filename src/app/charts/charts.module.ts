import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StateWiseChartComponent } from './state-wise-chart/state-wise-chart.component';
import { CityWiseChartComponent } from './city-wise-chart/city-wise-chart.component';
import { CompanyListComponent } from './company-list/company-list.component';
import { chartsRoutingModule } from "./charts-routing.module";
import { ChartsComponent } from './charts.component';
import { commonModule } from '../common/common.module';

@NgModule({
  declarations: [
    ChartsComponent,
    StateWiseChartComponent,
    CityWiseChartComponent,
    CompanyListComponent
  ],
  imports: [
    CommonModule,
    chartsRoutingModule,
    commonModule
  ],
  exports: [
    ChartsComponent,
    StateWiseChartComponent,
    CityWiseChartComponent,
    CompanyListComponent
  ]
})
export class ChartsModule { }
