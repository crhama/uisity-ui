import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';

import * as stdVm from '../models/student-vm';
import * as fromStudents from '../state/students.reducer'
import { DataDisplayMode } from 'src/app/shared/models/enums';
import * as studentsActions from "../state/students.action";



@Component({
  selector: 'app-all-students',
  templateUrl: './all-students.component.html',
  styleUrls: ['./all-students.component.css']
})
export class AllStudentsComponent implements OnInit {
  studentList$: Observable<stdVm.StudentViewModel[]>;
  errorMessage$: Observable<string>;
  
  constructor(private store: Store<fromStudents.IState>) { }

  ngOnInit() {
      this.store.dispatch(new studentsActions.LoadAllStudents());
      this.studentList$ = this.store.pipe(select(fromStudents.getAllStudents));
      this.errorMessage$ = this.store.pipe(select(fromStudents.getError));
  }

  switchTab(tab: string){    
    const payload = (tab === 'tab1') 
        ? DataDisplayMode.listView 
        : DataDisplayMode.gridView;

    this.store.dispatch(new studentsActions.ToggleAllStudentsDisplayMode(payload));
  }

}
