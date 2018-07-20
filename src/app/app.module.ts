import { BrowserModule } from '@angular/platform-browser';
import { NgModule, InjectionToken } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import { AppComponent } from './app.component';
import {Service1Service} from './service1.service';
import { Component2Component } from './component2/component2.component';
import { ChildComponent } from './child/child.component';
import { ParentComponent } from './parent/parent.component';
import {FormsModule} from '@angular/forms';
import {DataExchangeService} from './data-exchange.service';
@NgModule({
  declarations: [
    AppComponent,
    Component2Component,
    ChildComponent,
    ParentComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [DataExchangeService, Service1Service,{provide:"API_KEY",useValue:"xE8pozJ0orRi3hLDDdswqJmGxYoTwGfn"}],
  bootstrap: [AppComponent]
})
export class AppModule { 
  
}
export const token=new InjectionToken<string>("WeatherAPI");