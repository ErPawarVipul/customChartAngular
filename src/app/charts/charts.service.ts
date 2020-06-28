import { Injectable, OnInit } from '@angular/core';
import { Company } from './company.model';


@Injectable({providedIn:'root'})
export class ChartService implements OnInit {
  private cityWiseData = [
    {name:"Mumbai",companies:25},
    {name:"New Mumbai",companies:15},
    {name:"Pune",companies:16}
  ];
  private stateWiseData = [
    {stateName:"Mahatashtra", companies:56},
    {stateName:"Chennai", companies:30},
    {stateName:"Karnataka", companies:45}
  ];;

  private companyList : Company[] = [
    {
      name: "Abbott India Ltd",
      address: "3, Corporate Park, Sion Trombay Road, Mumbai - 400 071",
      contact: "022-6542154",
      city: "Mumbai",
      state: "Maharashtra"
    },
    {
      name: "Asian Paints Ltd",
      address: "Asian Paints House, 6A, Shantinagar, Santacruz (E), Mumbai - 400 055",
      contact: "022-65465212",
      city: "Mumbai",
      state: "Maharashtra"
    },
    {
      name: "BASF India Ltd",
      address: "The Capital, ‘A’ Wing, Bandra Kurla Complex, Bandra (East), Mumbai – 400051.",
      contact: "022-68884954",
      city: "Mumbai",
      state: "Maharashtra"
    },
    {
      name: "Hindustan Construction Co. Ltd",
      address: "Hincon House, LBS Marg, Vikhroli (W), Mumbai - 400 083",
      contact: "022-64451123",
      city: "Mumbai",
      state: "Maharashtra"
    },
  ]
  private selectedState;
  private selectedCity;

  constructor() {}

  ngOnInit() {

  }

  //below get methods will fetch state, city and company list to components
  getStateWiseList(){
    return this.stateWiseData;
  }
  getCityWiseList(){
    return this.cityWiseData;
  }
  getCompanyList(){
    return this.companyList;
  }

  // setHeight will set height for bar of multiple charts by taking local reference of element and accessing its style to manipulate.
  setHeight(chartBarList){
    let chartbars = chartBarList.nativeElement.childNodes;
    for(let l = 0; l < chartbars.length; l++){
      if(chartbars[l].nodeName == "LI"){
        let elAttr = chartbars[l].childNodes[0].attributes;
        let elAttrValue;
        for(let i=0;i<elAttr.length; i++){
          if(elAttr[i].name == "compcount"){
            elAttrValue = elAttr[i].value;
          }
        }
        chartbars[l].childNodes[0].style.height = elAttrValue *3 +"px";
      }
    }
  }

  // setCityWiseList and setCompanyList will get selected city
  setCityWiseList(cityWiseData){
    this.selectedState = cityWiseData;
  }
  setCompanyList(companyData){
    this.selectedCity = companyData;
  }
}
