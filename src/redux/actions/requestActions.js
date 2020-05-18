import * as actionTypes from '../actionTypes/requestActionTypes';

export const changeRequestInputValue = (step, fieldId, value) => {
    return {
        type: actionTypes.CHANGE_REQUEST_INPUT_VALUE,
        payload: {
            step,
            fieldId,
            value
        }
    }
}

export const selectRequestStep = (step) => {
    return {
        type: actionTypes.SELECT_REQUEST_STEP,
        payload: {
            step
        }
    }
}

export const rateSite = (rating) => {
    return {
        type: actionTypes.RATE_SITE,
        payload: {
            rating
        }
    }
}

export const setError = (step, fieldId, errorMessage) => {
    return {
        type: actionTypes.SET_ERROR,
        payload: {
            step,
            fieldId,
            errorMessage
        }
    }
}

export const setFieldValid = (step, fieldId) => {
    return {
        type: actionTypes.SET_FIELD_VALID,
        payload: {
            step,
            fieldId
        }
    }
}

export const touchField = (step, fieldId) => {
    return {
        type: actionTypes.TOUCH_FIELD,
        payload: {
            step,
            fieldId
        }
    }
}