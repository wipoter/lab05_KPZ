import { Component } from '@angular/core';
import { IStudent } from '../../interfaces/student';
import { StudentService } from 'src/app/shared/services/student.service';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent {
  students: IStudent[] = [];

  constructor(private service: StudentService){}

    ngOnInit() : void{
      this.service.getStudent().subscribe((result: IStudent[]) => (this.students = result));
    }

}
