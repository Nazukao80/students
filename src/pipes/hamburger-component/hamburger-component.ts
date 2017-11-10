import { Pipe, PipeTransform } from '@angular/core';

/**
 * Generated class for the HamburgerComponentPipe pipe.
 *
 * See https://angular.io/api/core/Pipe for more info on Angular Pipes.
 */
@Pipe({
  name: 'filter',
})
export class HamburgerComponentPipe implements PipeTransform {
  /**
   * Takes a value and makes it lowercase.
   */
  constructor (){

  }
  transform(items: any[], searchText: string): any[] {
    if(!items) return [];
    if(!searchText) return items;
    searchText = searchText.toLowerCase();

    return items.filter( it => {
      return it.name.toLowerCase().includes(searchText);
    });
   
  }
}
