import { DataDisplayMode } from 'src/app/shared/models/enums';
import * as fromRoot from '../../state/app.state';
import { createFeatureSelector, createSelector } from '@ngrx/store';
import { StudentsActions, StudentsActionTypes } from './students.action';
import * as stdVm from '../models/student-vm';

export interface IState extends fromRoot.IState {
    students: IStudentsState;
}

export interface IStudentsState {
    dataDisplayMode: DataDisplayMode;
    allStudents: stdVm.StudentViewModel[];
}

const getAllStudentsFeatureState = createFeatureSelector<IStudentsState>('students');

export const getDataDisplayMode = createSelector(
    getAllStudentsFeatureState,
    state => state.dataDisplayMode
);

export const getAllStudents = createSelector(
    getAllStudentsFeatureState,
    state => state.allStudents
);

const initialState: IStudentsState = {
    dataDisplayMode: DataDisplayMode.listView,
    allStudents: []
}

export function reducer(state = initialState, action: StudentsActions): IStudentsState {
    console.log(JSON.stringify(state));
    switch (action.type) {
        case StudentsActionTypes.ToggleAllStudentsDisplayMode:
            return {
                ...state,
                dataDisplayMode: action.payload
            }
        case StudentsActionTypes.LoadAllStudentsSuccess:
            return {
                ...state,
                allStudents: action.payload
            }
        default:
            return state;
    }
}