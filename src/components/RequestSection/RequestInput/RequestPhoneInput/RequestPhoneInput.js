import React, { useState } from 'react';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import './requestPhoneInput.scss';

export const RequestPhoneInput = ({ value, changeHandler, validationHandler, onClick }) => {
    return (
        <div className='requestPhoneInput'>
            <PhoneInput
                country='ru'
                value={value} 
                onChange={changeHandler} 
                onBlur={validationHandler} 
                onClick={onClick}
            />
        </div>
    )
}