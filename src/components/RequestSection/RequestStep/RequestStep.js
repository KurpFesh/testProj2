import React from 'react';
import { connect } from 'react-redux';

import './requestStep.scss';

import { selectRequestStep } from '../../../redux/actions/requestActions';

const RequestStepComponent = ({ step, title, current, selectRequestStep }) => {
    const classes = `requestStep${current==step?' current':''}`
    const goToStep = (step) => {
        if(step < current) {
            selectRequestStep(step)
        } else {
            return;
        }
    }
    return (
        <div className={classes} onClick={() => goToStep(step)}>
            {title}
        </div>
    )
}

export const RequestStep = connect(null, { selectRequestStep })(RequestStepComponent);