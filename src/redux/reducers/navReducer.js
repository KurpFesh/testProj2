import * as actionTypes from '../actionTypes/navActionTypes';

const initialState = 2;

export default ( state = initialState, action ) => {
    const { type, payload } = action;
    switch( type ) {

        case actionTypes.SELECT_PAGE:
            return payload.pageId;

        default:
            return state;
    }

}