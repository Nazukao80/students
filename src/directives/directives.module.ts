import { NgModule } from '@angular/core';
import { MenuDirective } from './menu/menu.directive';
import { IonicModule } from 'ionic-angular';
@NgModule({
	declarations: [MenuDirective],
	imports: [IonicModule],
	exports: [MenuDirective]
})
export class DirectivesModule {}
