import { Component, OnInit } from '@angular/core';
import { Company } from '../company.model';
import { ChartService } from '../charts.service';

@Component({
  selector: 'app-company-list',
  templateUrl: './company-list.component.html',
  styleUrls: ['./company-list.component.css']
})
export class CompanyListComponent implements OnInit {
  companyList: Company[];

  constructor(private chartService: ChartService) { }

  ngOnInit(): void {
    this.companyList = this.chartService.getCompanyList();
  }

}
