import { Injectable ,Inject} from '@angular/core';
import {HttpClient} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class Service1Service {

  constructor(private http:HttpClient,@Inject('API_KEY') public   apikey:string) { 
   
  }

  getWeatherData(callback:Function){
    this.http.get("http://dataservice.accuweather.com/forecasts/v1/hourly/12hour/1-204108_1_AL?apikey="+this.apikey+"&language=en-us&details=false&metric=false")
    .subscribe(data=>{
      console.log(data);
      callback(data);
    });
  }

}
