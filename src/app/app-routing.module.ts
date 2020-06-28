import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StateWiseChartComponent } from './charts/state-wise-chart/state-wise-chart.component';
import { CityWiseChartComponent } from './charts/city-wise-chart/city-wise-chart.component';
import { CompanyListComponent } from './charts/company-list/company-list.component';


const routes: Routes = [
  {path: "", component: StateWiseChartComponent},
  {path: "city-wise", component: CityWiseChartComponent},
  {path: "company-list", component:CompanyListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
