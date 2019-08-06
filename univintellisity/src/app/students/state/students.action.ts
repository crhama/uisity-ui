import { Action } from '@ngrx/store';
import { DataDisplayMode } from 'src/app/shared/models/enums';
import * as stdVm from '../models/student-vm';


export enum StudentsActionTypes {
    ToggleAllStudentsDisplayMode = '[Students] Toggle All Students Display Mode',
    LoadAllStudents = '[Students] Load all students from backend service',
    LoadAllStudentsSuccess = '[Students] Load all students from backend service Success',
    LoadAllStudentsFail = '[Students] Load all students from backend service Fails',

    LoadStudentToEdit = '[Students] Load selected student to edit',
    AddNewStudent = '[Students] Save new student to the backend',
    UpdateExistingStudent = '[Students] Save changes made to an existing student record to the backend',
    SaveNewStudentSuccess = '[Students] Add New student succeded'
}

export class ToggleAllStudentsDisplayMode implements Action {
    readonly type = StudentsActionTypes.ToggleAllStudentsDisplayMode;
    constructor(public payload: DataDisplayMode) {}
}

export class LoadAllStudents implements Action {
    readonly type = StudentsActionTypes.LoadAllStudents;
}

export class LoadAllStudentsSuccess implements Action {
    readonly type = StudentsActionTypes.LoadAllStudentsSuccess;
    constructor(public payload: stdVm.StudentViewModel[]) {}
}

export class LoadAllStudentsFail implements Action {
    readonly type = StudentsActionTypes.LoadAllStudentsFail;
    constructor(public payload: string) {}
}

export class LoadStudentToEdit implements Action {
    readonly type = StudentsActionTypes.LoadStudentToEdit;
    constructor(public payload: string) {}
}

export class AddNewStudent implements Action {
    readonly type = StudentsActionTypes.AddNewStudent;
    constructor(public payload: stdVm.StudentViewModel) {}
}

export class UpdateExistingStudent implements Action {
    readonly type = StudentsActionTypes.UpdateExistingStudent;
    constructor(public payload: stdVm.StudentViewModel) {}
}

export class SaveStudentSuccess implements Action {
    readonly type = StudentsActionTypes.SaveNewStudentSuccess;
}

export type StudentsActions = ToggleAllStudentsDisplayMode
    | LoadAllStudents
    | LoadAllStudentsSuccess
    | LoadAllStudentsFail
    | LoadStudentToEdit
    | AddNewStudent
    | UpdateExistingStudent
    | SaveStudentSuccess;