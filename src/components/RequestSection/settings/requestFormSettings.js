import * as fieldTypes from '../constants/fieldTypes';
import * as fieldIds from '../constants/fieldIds';

export const requestFormSettings = {
    steps: {
        1: {
            id: 1,
            title: 'Step 1',
            fields: [
                {
                    id: fieldIds.FIRST_NAME_FIELD,
                    type: fieldTypes.REQUEST_TEXT_TYPE,
                    placeholder: 'Enter First Name',
                    validate: (value) => {
                        let re = /^[а-яА-ЯёЁa-zA-Z]+$/i;
                        return re.test(String(value));
                    },
                    errorMessage: 'Invalid Firstname'
                },
                {
                    id: fieldIds.LAST_NAME_FIELD,
                    type: fieldTypes.REQUEST_TEXT_TYPE,
                    placeholder: 'Enter Last Name',
                    validate: (value) => {
                        let re = /^[а-яА-ЯёЁa-zA-Z]+$/i;
                        return re.test(String(value));
                    },
                    errorMessage: 'Invalid Lastname'
                },
                {
                    id: fieldIds.EMAIL_FIELD,
                    type: fieldTypes.REQUEST_EMAIL_TYPE,
                    placeholder: 'Enter Email',
                    validate: (value) => {
                        let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
                        return re.test(String(value).toLowerCase());
                    },
                    errorMessage: 'Invalid Email'
                }
            ]
        },
        2: {
            id: 2,
            title: 'Step 2',
            fields: [
                {
                    id: fieldIds.PHONE_FIELD,
                    type: fieldTypes.REQUEST_PHONE_TYPE,
                    placeholder: 'Enter Phone Number',
                    validate: (value) => {
                        const res = value.replace(/\s|\(|\)|\-/g, '');
                        return res.length > 11 && value.startsWith('+');;
                    },
                    errorMessage: 'Invalid Phone Number'
                }
            ]
        },
        3: {
            id: 3,
            title: 'Step 3',
            fields: [
                {
                    id: fieldIds.RATING_FIELD,
                    type: fieldTypes.REQUEST_RATING_TYPE,
                    placeholder: 'Please, Rate The Website =)',
                    validate: (value) => {
                        return value === 5;
                    },
                    errorMessage: 'Please, Rate 5 =)'
                }
            ]
        }
    },
}