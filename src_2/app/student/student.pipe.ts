import { Pipe, PipeTransform } from '@angular/core';
import {Student} from './student/student.component'

@Pipe({
  name: 'studentPipe'
})
export class StudentPipe implements PipeTransform {

  transform(student: Student): String {
    let str = String("");
    str += student.name.toString() + " " + student.surname.toString();
    return str;
  }

}
