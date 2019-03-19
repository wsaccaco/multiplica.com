import {Component, HostListener, Input, OnInit} from '@angular/core';
import {Service} from '../service';
import {SERVICES} from '../mock-services';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  constructor() { }

  @Input() service: Service;

  ngOnInit() {

  }

  onDelete(service) {
    SERVICES.splice(SERVICES.findIndex(({id}) => id === service.id), 1);
  }

}
