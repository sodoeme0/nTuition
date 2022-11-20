import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {HomepageComponent} from './components/homepage/homepage.component'
import {SchoolcostComponent} from './components/schoolcost/schoolcost.component';
import {LoancalcComponent} from './components/loancalc/loancalc.component';
import {GrantsComponent} from './components/grants/grants.component';

const routes: Routes = [
  {path:'',component:HomepageComponent},
  {path:'schoolcost', component:SchoolcostComponent},
  {path:'loancalc', component:LoancalcComponent},
  {path:'grants', component:GrantsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
