import React from 'react';
import { connect } from 'react-redux';

import './requestNextButton.scss';

import { selectRequestStep } from '../../../redux/actions/requestActions';

const RequestNextButtonComponent = ({ disabled, currentStep, selectRequestStep }) => {
    const classes = disabled ?'disabled':'';
    return (
        <div className='requestNextButton'>
            <button onClick={disabled?()=>{}:() => selectRequestStep(+currentStep + 1)} className={classes}>
                Next
            </button>
        </div>
    )
}

export const RequestNextButton = connect(null, { selectRequestStep })(RequestNextButtonComponent);