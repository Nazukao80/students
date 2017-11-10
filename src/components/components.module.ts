import { NgModule } from '@angular/core';
import { ElementComponent } from './element/element';
import { IonicModule } from 'ionic-angular';
import { HamburgerIconComponent } from './hamburger-icon/hamburger-icon';

@NgModule({
	declarations: [ElementComponent,
    HamburgerIconComponent],
	imports: [IonicModule],
	exports: [ElementComponent,
    HamburgerIconComponent]
})
export class ComponentsModule {}
