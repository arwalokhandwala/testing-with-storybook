import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
//For Knobs
import { withKnobs, text, radios } from '@storybook/addon-knobs';

import { InputField } from '.';

export const structure = {
    placeholder: "Name please",
};

export const actions = {
    onKeyPress: action('onKeyPress'), //acts like a stub for onKeyPress handler
};

storiesOf('Stories/UserInput', module)
    .add('default', () => <InputField structure={{ ...structure }} {...actions} />)
    .add('filled', () => <InputField structure={{ ...structure, value: "Arwa Lokhandwala" }} {...actions} />)

storiesOf('Knobs/UserInput',module)
    .addDecorator(withKnobs)
    .add('Dynamic', () => {
        const label = 'Types supported';
        const options = {
            Number: 'number',
            Text: 'text',
            Password: 'password',
        };
        const defaultValue = 'text';

        return <InputField structure={{
            placeholder:  text('placeholder', 'Name please'),
            type: radios(label, options, defaultValue)
        }} onKeyPress={actions.onKeyPress}/>
    })