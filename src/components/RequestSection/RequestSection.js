import React from 'react';
import { connect } from 'react-redux';

import './requestSection.scss';

import { BeaconLogo } from '../BeaconLogo/BeaconLogo';
import { RequestStep } from './RequestStep/RequestStep';
import { RequestInput } from './RequestInput/RequestInput';

import { requestFormSettings as settings } from './settings/requestFormSettings';
import { RequestNextButton } from './RequestNextButton/RequestNextButton';

const RequestSectionComponent = ({ requestSteps }) => {
    const { steps, currentStepNumber } = requestSteps;

    const currentStep = steps[currentStepNumber];
    const defaultFields = settings.steps[currentStepNumber].fields;
    
    const errors = Object.keys(currentStep).filter(fieldId => {
        return currentStep[fieldId].errorMessage !== '';
    }).map(fieldId => {
        return currentStep[fieldId].errorMessage;
    });
    const errorOccured = errors.length > 0;
    const notTouched = Object.keys(currentStep).filter(fieldId => {
        return !currentStep[fieldId].touched
    }).length > 0;

    return (
        <div className='requestSection' id='requestSection'>
                <div className='container'>
                <div className='requestSection__beaconBackground'>
                    <BeaconLogo color='green' shadow reflected />
                </div>
                <div className='requestSection__main'>
                    <h2>A couple of steps to make your store popular</h2>
                    <div className='requestSection__steps'>
                        {
                            Object.keys(settings.steps).map( stepId => {
                                return (
                                    <RequestStep
                                        key={`${stepId} step`}
                                        title={settings.steps[stepId].title}
                                        current={currentStepNumber}
                                        step={stepId}
                                    />
                                )
                            })
                        }
                    </div>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor 
                        incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud 
                        exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure </p>
                    <div className='requestSection__fields'>
                        {
                            defaultFields.map(field => {
                                return (
                                    <RequestInput
                                        key={`${field.id} field`}
                                        field={field} 
                                        step={currentStepNumber} 
                                        value={currentStep[field.id].value}
                                        touched={currentStep[field.id].touched}
                                    />
                                )
                            })
                        }
                        <div className='requestSection__forward'>
                            {
                                errorOccured
                                ?<div className='requestSection__error'>
                                    {errorOccured&&errors[errors.length-1]}
                                </div>
                                : currentStepNumber<Object.keys(steps).length
                                    && <RequestNextButton 
                                        disabled={errorOccured || notTouched}
                                        currentStep={currentStepNumber}
                                    />
                            }
                            
                        </div>
                    </div>
                </div>
            </div>            
        </div>
    )
}

const mapStateToProps = ({ requestSteps }) => {
    return {
        requestSteps
    }
};

export const RequestSection = connect(mapStateToProps)(RequestSectionComponent);