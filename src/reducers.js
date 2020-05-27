import {CHANGE_SEARCH_FIELD, REQUEST_ROBOTS_PENDING, REQUEST_ROBOTS_SUCCESS, REQUEST_ROBOTS_FAILED} from './constants.js'

const initialStateSearch = {
    searchField: ''
}

const initialStateRequest = {
    robots:[],
    pending: false,
    err: ''
}

export const searchRobots = (state=initialStateSearch, action={}) => {
    switch(action.type){
        case CHANGE_SEARCH_FIELD:
            return Object.assign({}, state, {searchField: action.payload});
        default:
            return state;
    }
}

export const requestRobots = (state=initialStateRequest, action ={}) => {
    switch(action.type){
        case REQUEST_ROBOTS_PENDING:
            return Object.assign({}, state, {pending: true});
        case REQUEST_ROBOTS_SUCCESS:
            return Object.assign({}, state, {pending: false, robots: action.payload});
        case REQUEST_ROBOTS_FAILED:
            return Object.assign({}, state, {err: action.payload});
        default:
            return state;
    }
}
