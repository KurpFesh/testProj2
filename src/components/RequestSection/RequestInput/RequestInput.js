import React from 'react';
import { connect } from 'react-redux';
import { RequestPhoneInput } from './RequestPhoneInput/RequestPhoneInput';
import { RequestRatingInput } from './RequestRatingInput/RequestRatingInput';

import './requestInput.scss';

import { changeRequestInputValue, setFieldValid, setError, rateSite, touchField } from '../../../redux/actions/requestActions';
import * as fieldTypes from '../constants/fieldTypes';

const RequestInputComponent = ({ step, field, value, touched,
    changeRequestInputValue, setFieldValid, setError, rateSite, touchField }) => {
    
    const { id, type, placeholder, validate, errorMessage } = field;
    
    const changeHandler = (event) => {
        changeRequestInputValue(step, field.id, event.target.value);
    }

    const phoneChangeHandler = (phoneString) => {
        changeRequestInputValue(step, field.id, phoneString);
    }

    const touchHandler = () => {
        touchField(step, field.id);
    }

    const validationHandler = (event) => {
        console.log('vv', event.target.value);
        const isValid = validate(event.target.value);
        if(isValid) {
            setFieldValid(step, field.id);
        } else {
            setError(step, field.id, errorMessage);
        }
    }

    const ratingValidator = (rating) => {
        const isValid = validate(rating);
        if(isValid) {
            rateSite(rating);
        } else {
            setError(step, field.id, errorMessage);
        }
    }

    const renderRequestInputWithType = ( type ) => {
        return (
            <div className='requestInput'>
                <input 
                    value={value} 
                    type={type} 
                    placeholder={placeholder}
                    onChange={changeHandler} 
                    onBlur={validationHandler}
                    onClick={touched?()=>{}:touchHandler}
                />
            </div>
        )
    }

    switch(type) {
        case fieldTypes.REQUEST_TEXT_TYPE: return renderRequestInputWithType('text'); 
            
        case fieldTypes.REQUEST_EMAIL_TYPE: return renderRequestInputWithType('email');

        case fieldTypes.REQUEST_PHONE_TYPE: 
            return <RequestPhoneInput 
                value={value}
                changeHandler={phoneChangeHandler}
                validationHandler={validationHandler}
                onClick={touched?()=>{}:touchHandler}
            />;
        
        case fieldTypes.REQUEST_RATING_TYPE: 
            return <RequestRatingInput
                rating={value}
                validationHandler={ratingValidator}
            />
    }
    
}

export const RequestInput = connect(null, { 
    changeRequestInputValue, setFieldValid, setError, rateSite, touchField 
})(RequestInputComponent);