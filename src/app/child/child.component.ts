import { Component, OnInit } from '@angular/core';
import {DataExchangeService} from '../data-exchange.service';
@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  constructor(public service:DataExchangeService) { }

  ngOnInit() {
  }

}
