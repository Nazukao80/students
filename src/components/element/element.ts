import { Component, ViewChildren, QueryList } from '@angular/core';

/**
 * Generated class for the ElementComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'elemento',
  templateUrl: 'element.html'
})
export class ElementComponent {
  @ViewChildren("div") divs: QueryList<any>
  text: string;

  constructor() {
    console.log('Hello ElementComponent Component');
    this.text = 'Hello World';
  }
  ngAfterViewInit() {
    this.divs.forEach(div => console.log(div));
  }
}
