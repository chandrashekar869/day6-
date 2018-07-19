import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import { AppComponent } from './app.component';
import {Service1Service} from './service1.service';
import { Component2Component } from './component2/component2.component';
@NgModule({
  declarations: [
    AppComponent,
    Component2Component
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [Service1Service],
  bootstrap: [AppComponent]
})
export class AppModule { }
