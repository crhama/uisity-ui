import { Action } from '@ngrx/store';
import { DataDisplayMode } from 'src/app/shared/models/enums';


export enum StudentsActionTypes {
    ToggleAllStudentsDisplayMode = '[Students] Toggle All Students Display Mode'
}

export class ToggleAllStudentsDisplayMode implements Action {
    readonly type = StudentsActionTypes.ToggleAllStudentsDisplayMode;
    constructor(public payload: DataDisplayMode) {}
}

export type StudentsActions = ToggleAllStudentsDisplayMode;