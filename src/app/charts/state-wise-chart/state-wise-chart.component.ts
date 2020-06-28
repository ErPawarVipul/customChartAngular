import { Component, OnInit, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';
import { ChartService } from '../charts.service';

@Component({
  selector: 'app-state-wise-chart',
  templateUrl: './state-wise-chart.component.html',
  styleUrls: ['./state-wise-chart.component.css'],
})
export class StateWiseChartComponent implements OnInit, AfterViewInit {
  barData;
  @ViewChild("stateChartBar") chartBarList : ElementRef;

  constructor(private route: Router, private chartService: ChartService) {
  }

  ngOnInit(): void {
    this.barData = this.chartService.getStateWiseList();
  }

  ngAfterViewInit() {
    this.chartService.setHeight(this.chartBarList);
  }

  showCityData(stateItemData) {
    this.chartService.setCityWiseList(stateItemData);
    this.route.navigate(["city-wise"]);
  }
}
