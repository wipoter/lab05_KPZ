import { HashLocationStrategy } from '@angular/common';
import { Component } from '@angular/core';
import { StudentService } from '../student.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent {
  studentArray: Student[] = [];
  constructor(private service: StudentService){}
    ngOnInit() : void{
      this.service.getStudent().subscribe((result: Student[]) => (this.studentArray = result));
    }

}

export class Student{
  public name = new String("Name");
  public surname = new String("Surname");

  constructor(name: String, surname: String, svc: StudentService){
    this.name = name;
    this.surname = surname;
  }
}