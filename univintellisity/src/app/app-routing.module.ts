import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AllStudentsComponent } from './students/all-students/all-students.component';
import { AddStudentComponent } from './students/add-student/add-student.component';
import { AboutStudentComponent } from './students/about-student/about-student.component';

const routes: Routes = [
  { path: 'students', component: AllStudentsComponent },
  { path: 'students/add', component: AddStudentComponent },
  { path: 'students/about', component: AboutStudentComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
