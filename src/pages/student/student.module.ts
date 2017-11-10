import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { StudentPage } from './student';
import { ComponentsModule } from '../../components/components.module';
import { PipesModule } from '../../pipes/pipes.module';

@NgModule({
  declarations: [
    StudentPage,
  ],
  imports: [
    ComponentsModule,
    PipesModule,
    IonicPageModule.forChild(StudentPage),
  ],
})
export class StudentPageModule {}
