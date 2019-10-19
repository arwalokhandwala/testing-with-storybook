import React from 'react'


import { InputField } from '../InputField';
import { Button } from '../Button';

import './index.css';
export default class LoginForm extends React.Component {
    render() {
        const { name, password, submit } = this.props.fields
        return (
            <div className="content">
                <InputField {...name} />
                <InputField {...password} />
                <Button  {...submit} />
            </div>)
    }
}