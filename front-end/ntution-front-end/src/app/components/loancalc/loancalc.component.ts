import { loanCalc } from './../../models/loan';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators, FormArray} from '@angular/forms';

@Component({
  selector: 'app-loancalc',
  templateUrl: './loancalc.component.html',
  styleUrls: ['./loancalc.component.css']
})
export class LoancalcComponent implements OnInit {

  isDisplayedPerMonth: Boolean = false;
  isDisplayedByDate: Boolean = true;

  loanCalculation: loanCalc = new loanCalc();
  replacementLengthCurrent: any = 0;
  interestPaymentsCurrent: any = 0;
  totalCostCurrent: any = 0;

  constructor() {
 
    this.isDisplayedByDate = true;
  }

  // onPerMonthChange(e: any) {
  //   this.isDisplayedPerMonth = true;
  //   this.isDisplayedByDate = false;
  // }

  // onByDateChange(e: any){
  //   this.isDisplayedPerMonth = false;
  //   this.isDisplayedByDate = true;
  // }

  calculateLoan(){
   
    this.replacementLengthCurrent = 403;
    this.interestPaymentsCurrent = 13334;
    this.totalCostCurrent = 48334;
  }

  ngOnInit(): void {
    
  }

}
