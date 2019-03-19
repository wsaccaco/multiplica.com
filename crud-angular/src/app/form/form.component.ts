import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {SERVICES} from '../mock-services';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  constructor() { }

  serviceForm = new FormGroup({
    title: new FormControl(''),
    description: new FormControl(''),
  });

  onSubmit() {
    SERVICES.push(Object.assign({id : new Date().getTime()}, this.serviceForm.value));
    this.serviceForm.reset();
  }

  ngOnInit() {
  }

}
