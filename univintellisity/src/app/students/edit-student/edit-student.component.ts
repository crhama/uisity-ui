import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
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
  errorMessage = '';
  saveStudentCompleted = false;

  constructor(private fb: FormBuilder,
    private store: Store<fromStudents.IState>,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
    this.initializeStudentForm();
    const id = this.route.snapshot.paramMap.get('id');
    this.store.dispatch(new studentsActions.LoadStudentToEdit(id));
    this.store.pipe(select(fromStudents.getLoadedStudentToEdit),
      takeWhile(() => this.componentActive))
      .subscribe(s => {
        this.studentToEdit = s;
        this.displayStudentToEdit();
      });

    this.store.pipe(select(fromStudents.getSaveStudentSucceeded),
      takeWhile(() => this.componentActive))
      .subscribe(susccess => {
        this.saveStudentCompleted = susccess;
        this.returnToStudentListPage();
      });
  }
  returnToStudentListPage() {
    if (this.saveStudentCompleted) {
      this.router.navigate(['/students']);
    }
  }

  initializeStudentForm() {
    this.studentForm = this.fb.group({
      firstName: '',
      lastName: '',
      email: '',
      gender: '',
      mobile: ''
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
    if (this.studentForm.valid) {
      if (this.studentForm.dirty) {
        const std = { ...this.studentToEdit, ...this.studentForm.value };

        if (std.id === '0') {
          this.store.dispatch(new studentsActions.AddNewStudent(std));
        } else {
          this.store.dispatch(new studentsActions.UpdateExistingStudent(std));
        }
      }
    } else {
      this.errorMessage = 'Please correct the validation errors.';
    }
  }

  onSaveComplete() {

  }

  ngOnDestroy(): void {
    this.componentActive = false;
  }
}
