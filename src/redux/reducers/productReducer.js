import * as actionTypes from '../actionTypes/productActionTypes';

const initialState = {
    1: {
        id: 1,
        title: 'Asensor',
        price: 15,
        description: 'ASensor is a BLE beacon with multiple advertising data formats. The BLE is a very low power 2.4G radio that can transmit the beacon information efficiently. The typical beacon battery life is 1.5 year in default settings 3-Axis, 12-bit accelerometer magna aliqua.',
        amount: 0,
    },
    2: {
        id: 2,
        title: 'ARM Cortex - M0',
        price: 13,
        description: 'ARM Cortex - M0 32-bit processor Dialog solution, long battery life Support Bluetooth Smart 4.0 Builtin 1 x CR2450 battery holder Temperature sensor for environment monitoring Configurable by App AprilBeacon',
        amount: 0,
    },
    3: {
        id: 3,
        title: 'Estimote Proximity Beacons',
        price: 25,
        description: 'Estimote Proximity Beacons lifetime: 2 years range: up to 70 m packets: iBeacon™ or Eddystone™ features: motion & temperature sensor, NFC',
        amount: 0,
    },
    4: {
        id: 4,
        title: 'Aprilbeacon 227L (150M Range)',
        price: 30,
        description: 'Aprilbeacon 227L (150M Range) iBeacon size: 66mm*36mm*22mm Default frequency: 900ms Setting frequency: 100ms or more System: IOS 7.0, Android 4.3 Color: green iBeacon + white case',
        amount: 0,
    },
};

export default (state = initialState, action ) => {
    const { type, payload } = action;
    switch( type ) {

        case actionTypes.INCREASE_PRODUCT_AMOUNT: 
            return {
                ...state,
                [payload.productId]: {
                    ...state[payload.productId],
                    amount: state[payload.productId].amount + 1
                }
            };

        case actionTypes.DECREASE_PRODUCT_AMOUNT: 
            return {
                ...state,
                [payload.productId]: {
                    ...state[payload.productId],
                    amount: state[payload.productId].amount - 1 >= 0
                        ? state[payload.productId].amount - 1
                        : 0
                }
            };

        case actionTypes.SET_PRODUCT_AMOUNT:
            console.log('aaa', payload); 
            return {
                ...state,
                [payload.productId]: {
                    ...state[payload.productId],
                    amount: payload.amount
                }
            };

        default: 
            return state;
    }
}