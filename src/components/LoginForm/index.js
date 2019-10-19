import React from 'react'

import '../Button';
import '../TextField';

import './index.css';
import { TextField } from '../TextField';
import { Button } from '../Button';

export default class LoginForm extends React.Component {
    render() {
        const { name, password, submit } = this.props.fields
        return (
            <div className="content">
                <TextField {...name} />
                <TextField {...password} />
                <Button  {...submit} />
            </div>)
    }
}