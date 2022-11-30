
import { Component, OnInit } from '@angular/core';
import {institution} from '../../models/institution';

@Component({
  selector: 'app-schoolcost',
  templateUrl: './schoolcost.component.html',
  styleUrls: ['./schoolcost.component.css']
})
export class SchoolcostComponent implements OnInit {
  institutionCost = new institution();
  schoolButtonName : string = "Select your school";
  courseButtonName : string = "Select your course";
  courseType : string = "Undergraduate";
  isResultsAvailable: Boolean = false;
  availableInstitutions: institution[] = [];
  getInstitutions = this.response();
  selectedIndex = 0;

  constructor() { 
    this.institutionCost.institutionName = "UNC Charlotte";
    this.institutionCost.streetAddr1 = "9201 University City Blvd";
    this.institutionCost.city = "Charlotte";
    this.institutionCost.state = "North Carolina";
    this.institutionCost.country = "USA";
    this.institutionCost.postal = "28223";
    this.institutionCost.institutionType = "Four Year University";
    this.institutionCost.tuition_rates_instate = "18000";
    this.institutionCost.tuition_rates_outofstate = "45000";
    this.institutionCost.tuition_rates_online = "47000";
    this.institutionCost.tuition_rates_international = "45000";
  }

  changeSchoolButtonText(value: string){
    this.schoolButtonName = value;
    this.isResultsAvailable = true;
    this.selectedIndex = this.availableInstitutions.findIndex((element) => element.institutionName == value);
    this.institutionCost = this.availableInstitutions[this.selectedIndex];
  }

  changeCourseButtonText(type: string, value: string){
    this.courseButtonName = value;
    this.courseType = type;
  }

  async response() { 
    const response = await fetch('http://localhost:3000/institutions/');
    const data = await response.json();

    data.institutions.forEach((element: any) => {
      const newInst = new institution();
      newInst.institutionName = element.name;
      newInst.streetAddr1 = element.location.street_address1;
      newInst.city = element.location.city;
      newInst.state = element.location.state_province;
      newInst.country = element.location.country;
      newInst.postal = element.location.postal_code;
      newInst.institutionType = element.institution_type;
      newInst.tuition_rates_instate = element.cost.in_state;
      newInst.tuition_rates_outofstate = element.cost.out_of_state;
      newInst.tuition_rates_online = element.cost.online;
      newInst.tuition_rates_international = element.cost.international;

      this.availableInstitutions.push(newInst);
    });
    return data;
  };

  ngOnInit(): void {
  
  }
}
