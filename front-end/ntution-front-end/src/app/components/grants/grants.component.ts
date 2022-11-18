import { Component, OnInit } from '@angular/core';
import { grants } from '../../models/grants'

@Component({
  selector: 'app-grants',
  templateUrl: './grants.component.html',
  styleUrls: ['./grants.component.css']
})
export class GrantsComponent implements OnInit {

  constructor() {
    
   }

  grants: grants[] = [];
  ngOnInit(): void {
  }

}
