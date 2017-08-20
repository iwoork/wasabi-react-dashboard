import {
    TOGGLE_DRAWER,
    OPEN_MODAL,
    EXPERIMENTS_REQUEST,
    EXPERIMENTS_SUCCESS,
    EXPERIMENTS_FAILURE
} from '../constants/actionTypes';
import { CALL_API  } from 'redux-api-middleware';

export function toggleDrawer(action){
    return (dispatch) => {
        dispatch({
            type: TOGGLE_DRAWER,
            payload: action
        });
    };
}

export function openModal(modal){
    return (dispatch) => {
        dispatch({
            type: OPEN_MODAL,
            payload: modal
        });
    };
}

export function getExperiments() {
    const url = 'http://596136068492d90011f12ce8.mockapi.io/experiments';
    return {
        [CALL_API]: {
            endpoint: url,
            method: 'GET',
            types: [
                EXPERIMENTS_REQUEST,
                EXPERIMENTS_SUCCESS,
                EXPERIMENTS_FAILURE
            ]
        }
    }
}
