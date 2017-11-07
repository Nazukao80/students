import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { StudentProvider } from '../../providers/student/student.provider';
import { Student } from '../../model/student/student.model';

/**
 * Generated class for the StudentPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-student',
  templateUrl: 'student.html',
})
export class StudentPage {
  private students : Student[];
  constructor(public navCtrl: NavController, public navParams: NavParams, public studentProvider: StudentProvider) {
    this.students = [];
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad StudentPage');
    this.studentProvider.getStudents().subscribe((value)=>{
      this.students = value;
      if (value[0] instanceof Student){
        console.log(this.students);
      }
      
     
    })
  }

  
}
