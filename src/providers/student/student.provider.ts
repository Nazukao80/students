import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { Student } from '../../model/student/student.model';
import { Observable } from 'rxjs/Observable';
import { Account } from "../../model/account/account.model"

/*
  Generated class for the StudentProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class StudentProvider {
  private students: Array<Student> = [];

  constructor(public http: Http) {
    console.log('Hello StudentProvider Provider');
  }

  getStudents(): Observable<Array<Student>>{
    return this.http.get("assets/json/students.json").map((value)=>{
      value.json().forEach(element => {
        let student = new Student(element.name, element.second_name, element.account, element.email, element.matter);
        this.students.push(student);
      });
      return this.students; 
    });  
  }
}
