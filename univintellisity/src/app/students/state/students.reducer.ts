import { DataDisplayMode } from 'src/app/shared/models/enums';
import * as fromRoot from '../../state/app.state';
import { createFeatureSelector, createSelector } from '@ngrx/store';
import { StudentsActions, StudentsActionTypes } from './students.action';
import * as stdVm from '../models/student-vm';

export interface IState extends fromRoot.IState {
    students: IStudentsState;
}

export interface IStudentsState {
    allStudents: stdVm.StudentViewModel[];
    studentToEditId: string;
    error: string;
}

const getAllStudentsFeatureState = createFeatureSelector<IStudentsState>('students');

export const getAllStudents = createSelector(
    getAllStudentsFeatureState,
    state => state.allStudents
);

export const getStudentToEditId = createSelector(
    getAllStudentsFeatureState,
    state => state.studentToEditId
);

export const getLoadedStudentToEdit = createSelector(
    getAllStudentsFeatureState,
    getStudentToEditId,
    (state, getStudentToEditId) => 
        state.allStudents.find(s => s.id === getStudentToEditId)
);

export const getError = createSelector(
    getAllStudentsFeatureState,
    state => state.error
);

const initialState: IStudentsState = {
    allStudents: [],
    studentToEditId: '',
    error: ''
}

export function reducer(state = initialState, action: StudentsActions): IStudentsState {
    switch (action.type) {
        case StudentsActionTypes.LoadAllStudentsSuccess:
            return {
                ...state,
                allStudents: action.payload,
                error: ''
            }
        case StudentsActionTypes.LoadAllStudentsFail:
            return {
                ...state,
                allStudents: [],
                error: action.payload
            }
        case StudentsActionTypes.LoadStudentToEdit:
            return {
                ...state,
                studentToEditId: action.payload
            }
        default:
            return state;
    }
}