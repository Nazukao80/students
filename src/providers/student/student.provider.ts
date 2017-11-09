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
    this.students = [];
  }

  getStudents(): Observable<any>{
    return this.http.get("assets/json/students.json").map((value)=>{
     return  value.json();
      
    });  
  }
}
