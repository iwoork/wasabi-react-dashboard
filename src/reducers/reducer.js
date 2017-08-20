import {
    TOGGLE_DRAWER,
} from '../constants/actionTypes';
import initialState from './initialState';

export default function appReducer(state = initialState.app, action) {
    switch (action.type) {
        case TOGGLE_DRAWER:
            return {
                ...state,
                drawer: !action.payload
            };
        default:
            return state;
    }
}
