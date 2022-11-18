
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
  isResultsAvailable: Boolean = false;

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


  changeSchoolButtonText(){
    this.schoolButtonName = 'UNC Charlotte';
    this.isResultsAvailable = true;
  }

  changeCourseButtonText(){
    this.courseButtonName = 'Graduate - All';
  }

  ngOnInit(): void {
  }

}
