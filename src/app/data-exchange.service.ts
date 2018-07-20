import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataExchangeService {
  text:string='Default';
  constructor() { }
  getText(){
    return this.text;
  }
}
