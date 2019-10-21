import React from 'react';
import { storiesOf } from '@storybook/react';

import LoginForm from './'

import {actions} from '../Button/Button.stories'
import {actions as inputAction} from '../InputField/InputField.stories'


export const defaultValues = {
    inputFields: [
        {
            structure: {
                placeholder: "Name Please"
            },
            onKeyPress: (e) => {
                console.log(e.target.value)
            }
        },
        {
            structure: {
                type: "password",
                placeholder: "Enter Password"
            },
            onKeyPress: (e) => {
                console.log(e.target.value)
            }
        }
    ],
    actionHandlers: [
        {
            view: {
                name: "Submit",
                disabled: true
            },
            onClick: null
        }
    ]
}

export const filledValues = {
    inputFields: [
        {
            structure: {
                value: "Arwa Lokhandwala"
            },
            onKeyPress: inputAction.onKeyPress
        },
        {
            structure: {
                type: "password",
                value: "arwa"
            },
            onKeyPress: inputAction.onKeyPress
        }
    ],
    actionHandlers: [
        {
            view: {
                name: "Submit",
                disabled: false
            },
            onClick: actions.onClick
        }
    ]
}

storiesOf('LoginForm', module)
    .addDecorator(story => <div style={{ width: "50%" }}>{story()}</div>)
    .add('default', () => <LoginForm {...defaultValues}/>)
    .add('filled', () => <LoginForm { ...filledValues }/>)