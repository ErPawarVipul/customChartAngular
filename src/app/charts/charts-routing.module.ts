import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StateWiseChartComponent } from './state-wise-chart/state-wise-chart.component';
import { CityWiseChartComponent } from './city-wise-chart/city-wise-chart.component';
import { CompanyListComponent } from './company-list/company-list.component';

const routes: Routes = [
  {
    path: 'state-wise',
    component: StateWiseChartComponent,
  },
  {path:'city-wise',
  component: CityWiseChartComponent},
  {path:'company-list',
component:CompanyListComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class chartsRoutingModule {}
