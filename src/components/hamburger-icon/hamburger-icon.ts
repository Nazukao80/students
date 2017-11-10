import { Component, ElementRef, ViewChild, Renderer, Input, ContentChild, ContentChildren } from '@angular/core';
import { ElementComponent } from '../element/element';

/**
 * Generated class for the HamburgerIconComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'hamburger-icon',
  templateUrl: 'hamburger-icon.html'
})
export class HamburgerIconComponent  {

  status: boolean = false;
  expanded: boolean = false;
  viewHeight: number;


  @ViewChild('accordionContent') elementView: ElementRef;
  @ContentChild(ElementComponent) content: ElementComponent;
  studentsName : Array<string>;
  childElement : any;
  constructor(private renderer: Renderer) {
    console.log('Hello HamburgerIconComponent Component');
    
  }
  ngAfterViewInit() {
    this.viewHeight = this.elementView.nativeElement.offsetHeight;
    this.renderer.setElementStyle(this.elementView.nativeElement, 'height', 0 + 'px');
  }
  clickEvent() {
    this.status = !this.status;
    this.expanded = !this.expanded;
    const newHeight = this.expanded ? '100%' : '0px';
    this.renderer.setElementStyle(this.elementView.nativeElement, 'height', newHeight);
  }
  ngAfterContentInit() {
   
     this.renderer.listen(this.content.elem.nativeElement, 'click', (evt) =>{
      alert("finally");
      console.log();
     });

  }
  
  
}
