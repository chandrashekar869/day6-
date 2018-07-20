import { Component, OnInit } from '@angular/core';
import {DataExchangeService} from '../data-exchange.service';
@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css'],
  viewProviders:[DataExchangeService]
})
export class ParentComponent implements OnInit {

  constructor(public service:DataExchangeService) { }

  ngOnInit() {
  }

}
