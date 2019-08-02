import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AllStudentsComponent } from './all-students/all-students.component';
import { AddStudentComponent } from './add-student/add-student.component';
import { AboutStudentComponent } from './about-student/about-student.component';

@NgModule({
  declarations: [AllStudentsComponent, AddStudentComponent, AboutStudentComponent],
  imports: [
    CommonModule
  ]
})
export class StudentsModule { }
