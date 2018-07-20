import { Component,Inject } from '@angular/core';
import {Service1Service} from './service1.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  weatherData:any=[];
  imgBaseUrl="https://developer.accuweather.com/sites/default/files/";
  constructor(private service:Service1Service){
 
  this.service.getWeatherData((data)=>{
    this.weatherData=data;
  });
  }
}
