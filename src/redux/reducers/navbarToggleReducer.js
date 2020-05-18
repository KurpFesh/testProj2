import * as actionTypes from '../actionTypes/navActionTypes';

const initialState = {
    isOpen: true
};

export default ( state = initialState, action ) => {
    const { type, payload } = action;
    switch( type ) {

        case actionTypes.TOGGLE_NAVBAR:
            return {
                isOpen: !state.isOpen
            }

        case actionTypes.OPEN_NAVBAR:
            return {
                isOpen: true
            }

        default:
            return state;
    }

}