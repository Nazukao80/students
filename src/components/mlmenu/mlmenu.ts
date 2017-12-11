import { Component, Input, ViewChild, ElementRef } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition
} from '@angular/animations';


/**
 * Generated class for the MlmenuComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'mlmenu',
  templateUrl: 'mlmenu.html',
  animations: [
    trigger('heroState', [
      state('inactive', style({
        backgroundColor: '#00965e',
        transform: 'scale(1,1)'
      })),
      state('active',   style({
        backgroundColor: '#86c7ab',
        left: '80%',
        transform: 'scale(0.8, 0.8)'
      })),
      transition('inactive => active', animate('200ms ease-in')),
      transition('active => inactive', animate('200ms ease-out')),
      transition('void => *',[
      animate(200, style({
        backgroundColor: '#aaa',
        transform: 'scale(1,1)'}))])
    ])
  ]
})
export class MlmenuComponent {

  @ViewChild('elem') elem: ElementRef;
  @Input() text : string;
  
  hero = {
    state : 'inactive'
  }
  constructor() {
    
  }

  toggleState() {
   this.hero.state = this.hero.state === 'inactive'? 'active' : 'inactive';
  }
 
}
