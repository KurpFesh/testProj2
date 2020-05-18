import * as actionTypes from '../actionTypes/requestActionTypes';
import * as fieldIds from '../../components/RequestSection/constants/fieldIds';

const initialState = {
    currentStepNumber: 1,
    steps: {
        1: {
            [fieldIds.FIRST_NAME_FIELD] : {
                value: '',
                errorMessage: '',
                touched: false,
            },
            [fieldIds.LAST_NAME_FIELD] : {
                value: '',
                errorMessage: '',
                touched: false,
            },
            [fieldIds.EMAIL_FIELD] : {
                value: '',
                errorMessage : '',
                touched: false,
            },
        },
        2: {
            [fieldIds.PHONE_FIELD] : {
                value: '',
                errorMessage : '',
                touched: false,
            },
        },
        3: {
            [fieldIds.RATING_FIELD] : {
                value: '',
                errorMessage : '',
                touched: false,
            },
        }
    }
}

export default (state = initialState, action) => {
    const { type, payload } = action;

    switch(type) {
        case actionTypes.CHANGE_REQUEST_INPUT_VALUE:
            return {
                ...state,
                steps: {
                    ...state.steps,
                    [payload.step]: {
                        ...state.steps[payload.step],
                        [payload.fieldId]: {
                            ...state.steps[payload.step][payload.fieldId],
                            value: payload.value
                        }
                    }
                }
            }

        case actionTypes.SELECT_REQUEST_STEP:
            return {
                ...state,
                currentStepNumber: payload.step
            }

        case actionTypes.SET_ERROR:
            return {
                ...state,
                steps: {
                    ...state.steps,
                    [payload.step]: {
                        ...state.steps[payload.step],
                        [payload.fieldId]: {
                            ...state.steps[payload.step][payload.fieldId],
                            errorMessage: payload.errorMessage
                        }
                    }
                }
            }

        case actionTypes.SET_FIELD_VALID:
            return {
                ...state,
                steps: {
                    ...state.steps,
                    [payload.step]: {
                        ...state.steps[payload.step],
                        [payload.fieldId]: {
                            ...state.steps[payload.step][payload.fieldId],
                            errorMessage: ''
                        }
                    }
                }
            }

        case actionTypes.RATE_SITE: 
            return {
                ...state,
                steps: {
                    ...state.steps,
                    [Object.keys(state.steps).length]: {
                        ...state.steps[Object.keys(state.steps).length],
                        [fieldIds.RATING_FIELD]: {
                            ...state.steps[Object.keys(state.steps).length][fieldIds.RATING_FIELD],
                            value: payload.rating,
                            errorMessage: ''
                        }
                    }
                }
            }

        case actionTypes.TOUCH_FIELD:
            return {
                ...state,
                steps: {
                    ...state.steps,
                    [payload.step]: {
                        ...state.steps[payload.step],
                        [payload.fieldId]: {
                            ...state.steps[payload.step][payload.fieldId],
                            touched: true
                        }
                    }
                }
            }

        default:
            return state;
    }
}