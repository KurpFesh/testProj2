import * as actionTypes from '../actionTypes/productActionTypes';

export const increaseProductAmount = (productId) => {
    return {
        type: actionTypes.INCREASE_PRODUCT_AMOUNT,
        payload: {
            productId
        }
    }
}

export const decreaseProductAmount = (productId) => {
    return {
        type: actionTypes.DECREASE_PRODUCT_AMOUNT,
        payload: {
            productId
        }
    }
}

export const setProductAmount = (productId, amount) => {
    return {
        type: actionTypes.SET_PRODUCT_AMOUNT,
        payload: {
            productId,
            amount
        }
    }
}