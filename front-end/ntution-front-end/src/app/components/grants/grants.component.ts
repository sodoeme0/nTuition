import { Component, OnInit } from '@angular/core';
import { grants } from '../../models/grants'

@Component({
  selector: 'app-grants',
  templateUrl: './grants.component.html',
  styleUrls: ['./grants.component.css']
})
export class GrantsComponent implements OnInit {
  availableScholarshipsGrants: grants[] = [];
  getScholarshipsGrants = this.response();

  constructor() {
  }

  // grants: grants[] = [];
  ngOnInit(): void {
  }

  async response() { 
    const response = await fetch('http://localhost:3000/scholarshipsgrants/');
    const data = await response.json();

    data.scholarshipsgrants.forEach((element: any) => {
      const newSg = new grants();
      newSg.sg_id = element._id;
      newSg.sg_category = element.sg_category;
      newSg.sg_name = element.sg_name;
      newSg.sg_deadline = element.sg_deadline
      newSg.sg_offered_by = element.sg_offered_by;
      newSg.sg_nationality = element.sg_nationality;
      newSg.sg_description = element.sg_description;
      newSg.sg_requirements.essay = element.sg_requirements.essay;
      newSg.sg_requirements.recommendations = element.sg_requirements.recommendations;
      newSg.sg_requirements.min_gpa = element.sg_requirements.min_gpa;
      newSg.sg_major = element.sg_major;
      newSg.sg_type = element.sg_type;
      newSg.sg_application_link = element.sg_application_link;
      newSg.sg_award_amount = element.sg_award_amount;

      this.availableScholarshipsGrants.push(newSg);
    });
    return data;
  };

}
