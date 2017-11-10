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
  public studentsName : string[];
  constructor(public navCtrl: NavController, public navParams: NavParams, public studentProvider: StudentProvider) {
    this.students = [];
    this.studentsName = [];
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad StudentPage');
    this.studentProvider.getStudents().subscribe((value)=>{
      value.forEach(element => {
        let student = new Student(element.name, element.second_name, element.account, element.email, element.matter);
        this.students.push(student);
        this.studentsName.push(element.name);
      });
    })
  }

  filterItems(ev : any) {
    let val = ev.target.value;
    if (val && val.trim() !== '') {
      this.studentsName = this.studentsName.filter(function(item) {
        return item.toLowerCase().includes(val.toLowerCase());
      });
    }
  }
}
