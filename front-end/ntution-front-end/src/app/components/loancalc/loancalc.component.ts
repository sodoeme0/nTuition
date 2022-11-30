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
  replacementLengthCurrent: Number = 0;
  interestPaymentsCurrent: Number = 0;
  totalCostCurrent: Number = 0;

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

  calculateLoan(balance: number, interestRate: number, years: number) {
    console.log({
      inputBalance: balance,
      inputRate: interestRate,
      inputYears: years
    })
    const finalBalance = (balance * (1 + ((interestRate/100) * (years))));
    const totalInterest = (finalBalance - balance);
    const mPayment = (finalBalance / (years * 12))

    this.replacementLengthCurrent = Math.floor(mPayment);
    this.interestPaymentsCurrent = Math.floor(totalInterest);
    this.totalCostCurrent = Math.floor(finalBalance);
  }

  onKey(event: any, field: Number) {
    switch(field) {
      case 0:
        this.loanCalculation.currentLoanBalance = event.target.value;
        return;
      case 1:
        this.loanCalculation.annualInterestRate = event.target.value;
        return;
      case 2:
        this.loanCalculation.loanTerms = event.target.value;
        return;
    }
  }

  ngOnInit(): void {
    
  }

}
