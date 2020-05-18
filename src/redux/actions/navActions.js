import * as actionTypes from '../actionTypes/navActionTypes';

export const selectPage = (pageId) => {
    return {
        type: actionTypes.SELECT_PAGE,
        payload: {
            pageId
        }
    }
}

export const toggleNavbar = () => {
    return {
        type: actionTypes.TOGGLE_NAVBAR,
    }
}

export const openNavbar = () => {
    return {
        type: actionTypes.OPEN_NAVBAR,
    }
}