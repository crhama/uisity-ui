import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Store, select } from '@ngrx/store';

import * as fromStudents from '../state/students.reducer';
import * as studentsActions from "../state/students.action";
import * as stdVm from '../models/student-vm';
import { takeWhile } from 'rxjs/operators';

@Component({
  selector: 'app-edit-student',
  templateUrl: './edit-student.component.html',
  styleUrls: ['./edit-student.component.css']
})
export class EditStudentComponent implements OnInit, OnDestroy {
  studentForm: FormGroup;
  studentToEdit: stdVm.StudentViewModel;
  componentActive = true;

  constructor(private fb: FormBuilder,
    private store: Store<fromStudents.IState>,
    private route: ActivatedRoute) { }

  ngOnInit() {
    this.studentForm = this.fb.group({
      firstName: '',
      lastName: '',
      email: '',
      gender: '',
      mobile: ''
    });

    const id = this.route.snapshot.paramMap.get('id');
    this.store.dispatch(new studentsActions.LoadStudentToEdit(id));
    this.store.pipe(select(fromStudents.getLoadedStudentToEdit),
      takeWhile(() => this.componentActive))
      .subscribe(s => {
        this.studentToEdit = s;
        this.displayStudentToEdit();
      });
  }
  displayStudentToEdit() {
    if (this.studentForm) {
      this.studentForm.reset();
    }

    this.studentForm = this.fb.group({
      firstName: this.studentToEdit.firstName,
      lastName: this.studentToEdit.lastName,
      email: this.studentToEdit.email,
      gender: this.studentToEdit.gender,
      mobile: this.studentToEdit.mobile
    });
  }

  save() {
    console.log(this.studentForm);
    console.log('saved: ' + JSON.stringify(this.studentForm.value));
  }

  ngOnDestroy(): void {
    this.componentActive = false;
  }
}
