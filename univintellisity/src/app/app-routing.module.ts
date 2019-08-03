import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AllStudentsComponent } from './students/all-students/all-students.component';
import { AboutStudentComponent } from './students/about-student/about-student.component';
import { EditStudentComponent } from './students/edit-student/edit-student.component';

const routes: Routes = [
  { path: 'students', component: AllStudentsComponent },
  { path: 'students/add', component: EditStudentComponent },
  { path: 'students/edit', component: EditStudentComponent },
  { path: 'students/about', component: AboutStudentComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
