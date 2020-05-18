import { combineReducers } from 'redux';

import navReducer from './navReducer';
import productReducer from './productReducer';
import requestReducer from './requestReducer';
import navbarToggleReducer from './navbarToggleReducer';

export default combineReducers({
    navPageSelected: navReducer,
    products: productReducer,
    requestSteps: requestReducer,
    navbarToggler: navbarToggleReducer,
});