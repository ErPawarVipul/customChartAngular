import { Component, OnInit, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';
import { ChartService } from '../charts.service';

@Component({
  selector: 'app-city-wise-chart',
  templateUrl: './city-wise-chart.component.html',
  styleUrls: ['./city-wise-chart.component.css']
})
export class CityWiseChartComponent implements OnInit, AfterViewInit {
  cityData;
  @ViewChild("cityChartBar") chartBarList : ElementRef;

  constructor(private route: Router, private chartService: ChartService) { }

  ngOnInit(): void {
    this.cityData = this.chartService.getCityWiseList();
  }

  ngAfterViewInit() {
    // this will set bar values by accessing centralized service function.
    this.chartService.setHeight(this.chartBarList);
  }

  showCompanyList(companyList) {
    this.chartService.setCompanyList(companyList);
    this.route.navigate(["company-list"]);
  }

}
