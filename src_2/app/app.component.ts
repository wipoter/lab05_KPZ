import { Component } from '@angular/core';
import { StudentService } from './student/student.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-kpz-dmytro';
  constructor(svc: StudentService){
  }
}
