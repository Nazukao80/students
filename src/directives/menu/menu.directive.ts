import { Directive, ElementRef, HostListener, Input, Renderer2 } from '@angular/core';
import { ɵAnimationEngine as AnimationEngine } from '@angular/animations/browser';
import { trigger, state, style, transition, animate } from '@angular/animations';
/**
 * Generated class for the MenuDirective directive.
 *
 * See https://angular.io/api/core/Directive for more info on Angular
 * Directives.
 */
@Directive({
  selector: '[menu]'
})
export class MenuDirective {
  
  constructor(private el: ElementRef) {  
   
  }

  @HostListener('mouseenter') onMouseEnter() {
    this.highlight('yellow');
  }
  
  @HostListener('mouseleave') onMouseLeave() {
    this.highlight(null);
  }
  
  @HostListener('click') onclick() {
    this.moveElement();
  }

  private highlight(color: string) {
    this.el.nativeElement.style.color = color;
  }

  private moveElement(){
  
  }
}
