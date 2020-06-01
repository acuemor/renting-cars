import { Pipe, PipeTransform } from '@angular/core';
import { Car } from './car/car.model';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(items: Car[], searchText: string): any[] {
    if (!items) {
      return [];
    }
    if (!searchText) {
      return items;
    }
    searchText = searchText.toLowerCase().trim();

    let response = items.filter(it => {
      return it.model.toLowerCase().includes(searchText) || it.brand.toLowerCase().includes(searchText)
    });

    return response.length > 0 ? response : [-1];
  }

}
