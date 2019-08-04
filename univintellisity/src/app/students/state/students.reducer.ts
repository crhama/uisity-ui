import { DataDisplayMode } from 'src/app/shared/models/enums';
import * as fromRoot from './app.state';

export interface IState extends fromRoot.IState {
    students: IStudentsState;
}

export interface IStudentsState {
    dataDisplayMode: DataDisplayMode;
}

const initialState: IStudentsState = {
    dataDisplayMode: DataDisplayMode.listView
}

export function reducer(state = initialState, action): IStudentsState {
    switch (action.type) {        
        case 'TOGGLE_ALLSTUDENTS_DISPLAYMODE':
            return {
                ...state,
                dataDisplayMode: action.payload
            }
        default:
            return state;
    }
}