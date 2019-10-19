import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import { Button } from './';

export const view = {
    name: "Proceed",
    disabled: true,
};

export const actions = {
    onClick: action('onClick'), //acts like a stub for onClick handler
};

storiesOf('Button', module)
    .add('default', () => <Button view={{ ...view }} {...actions} />)
    .add('active', () => <Button view={{ ...view, disabled: false }} {...actions} />)