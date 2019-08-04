import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AllStudentsComponent } from './all-students/all-students.component';
import { AboutStudentComponent } from './about-student/about-student.component';
import { RouterModule } from '@angular/router';
import { EditStudentComponent } from './edit-student/edit-student.component';
import { StoreModule } from '@ngrx/store';
import { reducer } from './state/students.reducer';

@NgModule({
  declarations: [
    AllStudentsComponent, 
    AboutStudentComponent, 
    EditStudentComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    StoreModule.forFeature('students', reducer)
  ]
})
export class StudentsModule { }
