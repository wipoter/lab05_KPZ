import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IStudent } from '../../shared/interfaces/student';

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  constructor(private http: HttpClient){}
  public getStudent() : Observable<IStudent[]>{
    const path = 'https://localhost:7276/api/StudentAccount/Student';
    return this.http.get<IStudent[]>(path);
  }
}
