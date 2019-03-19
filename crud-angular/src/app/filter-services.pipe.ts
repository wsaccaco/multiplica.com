import { Pipe, PipeTransform } from '@angular/core';
import {Service} from './service';

@Pipe({
  name: 'filterServices',
  pure: false
})
export class FilterServicesPipe implements PipeTransform {

  transform(services: Service[], args?: any): any {
    return services.filter(service => !service.title.toLowerCase().search(args));
  }

}
