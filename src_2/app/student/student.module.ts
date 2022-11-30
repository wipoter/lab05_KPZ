import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import {AppComponent} from "../app.component";
import { StudentComponent } from './student/student.component';
import { StudentPipe } from './student.pipe';
import { LeftPositionDirective } from './left-position.directive';
import { StudentService } from './student.service';
import { HttpClientModule, HttpXsrfTokenExtractor, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { Token } from '@angular/compiler';
import { TokenInterceptor } from '../token.interceptor';

const routes: Routes = [
  { path: '', component: StudentComponent },
];
@NgModule({
  declarations: [
    StudentComponent,
    StudentPipe,
    LeftPositionDirective
  ],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes),
    HttpClientModule,
    FormsModule
  ],
  exports: [
    RouterModule,
    StudentComponent,
  ],
  providers:[StudentService,
  {provide: HTTP_INTERCEPTORS, useClass: TokenInterceptor, multi: true}],
})
export class StudentModule {
}
