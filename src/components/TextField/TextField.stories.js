import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import { TextField } from './';

export const structure = {
    placeholder: "Name please",
};

export const actions = {
    onKeyPress: action('onKeyPress'), //acts like a stub for onKeyPress handler
};

storiesOf('User Input', module)
    .add('default', () => <TextField structure={{ ...structure }} {...actions} />)
    .add('filled', () => <TextField structure={{ ...structure, value: "Arwa Lokhandwala" }} {...actions} />)