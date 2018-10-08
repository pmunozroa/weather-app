import { SET_CITY } from './../actions/';

export const city = (state = {}, action) => {
    /* jshint ignore: start */
    switch (action.type){
        case SET_CITY:
            return action.value;
        default:
            return state;
    }
    /* jshint ignore: end */
};