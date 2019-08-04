import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';

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
  studentList: stdVm.StudentViewModel[]  = [
    {
        id: '',  				
        firstName: 'Rajesh',
        middleName: '',
        lastName: 'Bhatt',
        departmentId: '',
        departmentName: 'Mechanical',
        mobile: '4444565756',
        email: 'rajesh@gmail.com',
        admissionDate: '22 Feb 2010',
    },
    {
        id: '',  					
        firstName: 'Pooja',
        middleName: '',
        lastName: 'Patel',
        departmentId: '',
        departmentName: 'Science',
        mobile: '444786876',
        email: 'pooja@gmail.com',
        admissionDate: '27 Aug 2005',
    },
    {
        id: '', 				
        firstName: 'Sarah',
        middleName: '',
        lastName: 'Smith',
        departmentId: '',
        departmentName: 'M.C.A.',
        mobile: '44455546456',
        email: 'sarah@gmail.com',
        admissionDate: '05 Jun 2011',
    },
    {
        id: '',  					
        firstName: 'John',
        middleName: '',
        lastName: 'Deo',
        departmentId: '',
        departmentName: 'M.B.B.S.',
        mobile: '444543564',
        email: 'john@gmail.com',
        admissionDate: '15 Feb 2012',
    },
    {
        id: '',  					
        firstName: 'Jay',
        middleName: '',
        lastName: 'Soni',
        departmentId: '',
        departmentName: 'Arts',
        mobile: '444543564',
        email: 'kenh@gmail.com',
        admissionDate: '12 Nov 2012',
    },
    {
        id: '',  					
        firstName: 'Jacob',
        middleName: '',
        lastName: 'Ryan',
        departmentId: '',
        departmentName: 'Music',
        mobile: '444543564',
        email: 'johnson@gmail.com',
        admissionDate: '03 Dec 2001',
    },
    {
        id: '',  					
        firstName: 'Megha',
        middleName: '',
        lastName: 'Trivedi',
        departmentId: '',
        departmentName: 'Commerce',
        mobile: '444543564',
        email: 'megha@gmail.com',
        admissionDate: '17 Mar 2013',
    },
    {
        id: '', 				
        firstName: 'Raj',
        middleName: '',
        lastName: 'Rajesh',
        departmentId: '',
        departmentName: 'Civil',
        mobile: '4444565756',
        email: 'rajesh@gmail.com',
        admissionDate: '22 Feb 2000',
    }
]
  displayMode: DataDisplayMode;
  
  constructor(private store: Store<fromStudents.IState>) { }

  ngOnInit() {
      this.store.pipe(select(fromStudents.getDataDisplayMode)).subscribe(
        dataDisplayMode => this.displayMode = dataDisplayMode
      );
  }

  switchTab(tab: string){    
    const payload = (tab === 'tab1') 
        ? DataDisplayMode.listView 
        : DataDisplayMode.gridView;

    this.store.dispatch(new studentsActions.ToggleAllStudentsDisplayMode(payload));
  }

}
