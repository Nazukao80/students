import { Component, ViewChildren, QueryList, ElementRef, ViewChild, Input } from '@angular/core';

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
  @Input() matter : string;
  @Input() vote : number;
  @ViewChild('elem') elem : ElementRef;
  text: string;
  
  constructor() {
    console.log('Hello ElementComponent Component');
    this.text = 'Hello World';
  }
 
}
