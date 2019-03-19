import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ServicesComponent } from './services/services.component';
import { FilterComponent } from './filter/filter.component';
import { CardComponent } from './card/card.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { FormComponent } from './form/form.component';
import { FilterServicesPipe } from './filter-services.pipe';

@NgModule({
  declarations: [
    AppComponent,
    ServicesComponent,
    FilterComponent,
    CardComponent,
    FormComponent,
    FilterServicesPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
