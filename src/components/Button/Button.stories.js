import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import { specs, describe, it } from 'storybook-addon-specifications'

import {mount} from "enzyme";
import expect from "expect";

import { Button } from './';

export const view = {
    name: "Proceed",
    disabled: true,
};

export const actions = {
    onClick: action('onClick'), //acts like a stub for onClick handler
};

storiesOf('Button', module)
    .add('default', () => {
    const story = <Button view={{ ...view }} {...actions} />

    specs(() => describe('Button', function() {
        it('Should be in default state', function(){
            let output = mount(story);
            expect(output.props().disabled).to.equal(true);
        })
    }))
    return story
    })
    .add('active', () => <Button view={{ ...view, disabled: false }} {...actions} />)
