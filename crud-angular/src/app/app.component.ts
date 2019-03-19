import { Component, OnInit } from '@angular/core';
import {SERVICES} from './mock-services';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit  {
  services = SERVICES;
  search = '';
  ngOnInit() {
  }
}
