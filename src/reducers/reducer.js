import {
    TOGGLE_DRAWER,
    OPEN_MODAL
} from '../constants/actionTypes';
import initialState from './initialState';

export default function appReducer(state = initialState.app, action) {
    switch (action.type) {
        case TOGGLE_DRAWER:
            return {
                ...state,
                drawer: !action.payload
            };

        case OPEN_MODAL:
            return {
                ...state,
                modal: action.payload
            }
        default:
            return state;
    }
}
