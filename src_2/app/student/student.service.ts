import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Student } from './student/student.component';

@Injectable({
  providedIn: 'root'
})

export class StudentService {  
  constructor(private http: HttpClient){}
  public getStudent() : Observable<Student[]>{
    const path = 'https://localhost:7276/api/StudentAccount/Student';
    return this.http.get<Student[]>(path);
  }
}
