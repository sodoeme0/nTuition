import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';  
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'

import { AppComponent } from './app.component';
import { SchoolcostComponent } from './components/schoolcost/schoolcost.component';
import { HomepageComponent } from './components/homepage/homepage.component';
import { LoancalcComponent } from './components/loancalc/loancalc.component';
import { GrantsComponent } from './components/grants/grants.component';

@NgModule({
  declarations: [
    AppComponent,
    SchoolcostComponent,
    HomepageComponent,
    LoancalcComponent,
    GrantsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
