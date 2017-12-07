import { NgModule } from '@angular/core';
import { ElementComponent } from './element/element';
import { IonicModule } from 'ionic-angular';
import { HamburgerIconComponent } from './hamburger-icon/hamburger-icon';
import { MlmenuComponent } from './mlmenu/mlmenu';

@NgModule({
	declarations: [ElementComponent,
    HamburgerIconComponent,
    MlmenuComponent],
	imports: [IonicModule],
	exports: [ElementComponent,
    HamburgerIconComponent,
    MlmenuComponent]
})
export class ComponentsModule {}
