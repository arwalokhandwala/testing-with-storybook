import React from 'react';
import { storiesOf } from '@storybook/react';

import LoginForm from './'

import { structure, actions } from '../InputField/InputField.stories'

export const defaultValues = {
    name: {
        structure: {
            placeholder: "Name Please"
        },
        onKeyPress: (e) => {
            console.log(e.target.value)
        }
    },
    password: {
        structure: {
            type: "password",
            placeholder: "Enter Password"
        },
        onKeyPress: (e) => {
            console.log(e.target.value)
        }
    },
    submit: {
        view: "Submit",
        disabled: true
    }
}

export const filledValues = {
    name: {
        ...defaultValues.name,
        structure: {
            value: "Arwa Lokhandwala"
        }
    },
    password: {
        ...defaultValues.password,
        structure: {
            value: "arwa"
        }
    },
    submit: {
        ...defaultValues.submit,
        view: {
            disabled: false
        }
    }
}

storiesOf('LoginForm', module)
    .addDecorator(story => <div style={{ width: "50%" }}>{story()}</div>)
    .add('default', () => <LoginForm fields={{ ...defaultValues }} />)
    .add('filled', () => <LoginForm fields={{ ...filledValues }} />)
    // .add('withFilledValue', () => <LoginForm structure={{ ...structure, value: "Arwa Lokhandwala" }} {...actions} />)
    // .add('loading', () => <LoginForm loading tasks={[]} {...actions} />)
    // .add('empty', () => <LoginForm tasks={[]} {...actions} />);