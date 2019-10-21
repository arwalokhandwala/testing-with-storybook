import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import { InputField } from '.';

export const structure = {
    placeholder: "Name please",
};

export const actions = {
    onKeyPress: action('onKeyPress'), //acts like a stub for onKeyPress handler
};

storiesOf('User Input', module)
    .add('default', () => <InputField structure={{ ...structure }} {...actions} />)
    .add('filled', () => <InputField structure={{ ...structure, value: "Arwa Lokhandwala" }} {...actions} />)