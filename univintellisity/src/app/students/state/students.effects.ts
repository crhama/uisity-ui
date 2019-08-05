import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';

import { StudentsService } from '../students.service';
import * as studentsActions from "../state/students.action";
import { mergeMap, map, catchError } from 'rxjs/operators';
import * as stdVm from '../models/student-vm';
import { of } from 'rxjs';


@Injectable()
export class StudentsEffects {

    constructor(private actions$: Actions,
        private studentsService: StudentsService) { }

    @Effect()
    loadAllStudents$ = this.actions$.pipe(
        ofType(studentsActions.StudentsActionTypes.LoadAllStudents),
        mergeMap((action: studentsActions.LoadAllStudents) =>
            this.studentsService.getStudents().pipe(
                map((students: stdVm.StudentViewModel[]) =>
                    (new studentsActions.LoadAllStudentsSuccess(students))),
                catchError(err => of(new studentsActions.LoadAllStudentsFail(err)))
            )
        )
    );
}