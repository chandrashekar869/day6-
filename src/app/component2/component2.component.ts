import { Component, OnInit } from '@angular/core';
import {ReflectiveInjector} from '@angular/core';
@Component({
  selector: 'app-component2',
  templateUrl: './component2.component.html',
  styleUrls: ['./component2.component.css']
})
export class Component2Component implements OnInit {

  constructor() { 
    console.log("From engineinstance",engineinstance.getDisplacement());
    console.log("From engineinstance2",engineinstance2.getDisplacement());
    engineinstance.increasePower(200);
    console.log("From engineinstance2 updated value",engineinstance2.getDisplacement());

  }

  ngOnInit() {
  }

}


class Engine{
  displacement:number=1000;
  constructor(){

  }
  getDisplacement(){
    return this.displacement;
  }
  increasePower(by:number){
    this.displacement+=by;
  }
}
class Tyre{
  pressure:number=36;
  constructor(){

  }
  getDisplacement(){
    return this.pressure;
  }
}

let injector=ReflectiveInjector.resolveAndCreate([
  {provide:Engine,useClass:Engine},
  {provide:Tyre,useClass:Tyre}
]);
let engineinstance=injector.get(Engine);
let engineinstance2=injector.get(Engine);
