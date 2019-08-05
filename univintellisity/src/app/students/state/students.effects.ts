import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';

import { StudentsService } from '../students.service';
import * as studentsActions from "../state/students.action";
import { mergeMap, map, catchError } from 'rxjs/operators';
import * as stdVm from '../models/student-vm';
import { of, Observable } from 'rxjs';
import { Action } from '@ngrx/store';


@Injectable()
export class StudentsEffects {

    constructor(private actions$: Actions,
        private studentsService: StudentsService) { }

    @Effect()
    loadAllStudents$: Observable<Action> = this.actions$.pipe(
    ofType(studentsActions.StudentsActionTypes.LoadAllStudents),
    mergeMap(action =>
        this.studentsService.getStudents().pipe(
        map(students => (new studentsActions.LoadAllStudentsSuccess(students))),
        catchError(err => of(new studentsActions.LoadAllStudentsFail(err)))
      )
    )
  );
}