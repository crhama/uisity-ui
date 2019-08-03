import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AllStudentsComponent } from './all-students/all-students.component';
import { AboutStudentComponent } from './about-student/about-student.component';
import { RouterModule } from '@angular/router';
import { EditStudentComponent } from './edit-student/edit-student.component';

@NgModule({
  declarations: [
    AllStudentsComponent, 
    AboutStudentComponent, 
    EditStudentComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class StudentsModule { }
