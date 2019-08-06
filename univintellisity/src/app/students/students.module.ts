import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { StoreModule } from '@ngrx/store';

import { AllStudentsComponent } from './all-students/all-students.component';
import { AboutStudentComponent } from './about-student/about-student.component';
import { EditStudentComponent } from './edit-student/edit-student.component';

import { reducer } from './state/students.reducer';
import { EffectsModule } from '@ngrx/effects';
import { StudentsEffects } from './state/students.effects';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    AllStudentsComponent, 
    AboutStudentComponent, 
    EditStudentComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    StoreModule.forFeature('students', reducer),
    EffectsModule.forFeature([StudentsEffects]),
    SharedModule
  ]
})
export class StudentsModule { }
