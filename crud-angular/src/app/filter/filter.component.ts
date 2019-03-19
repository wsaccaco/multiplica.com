import {Component, OnInit, HostBinding, Output, EventEmitter, HostListener} from '@angular/core';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css'],
})
export class FilterComponent implements OnInit {

  @Output() search: EventEmitter<null> = new EventEmitter();

  customChange(e) {
    console.log(e.data);
    this.search.emit(e.data);
  }

  constructor() { }

  ngOnInit() {}

}
