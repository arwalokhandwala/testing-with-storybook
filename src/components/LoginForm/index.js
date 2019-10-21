import React from 'react'

import { InputField } from '../InputField';
import { Button } from '../Button';

import './index.css';

export default class LoginForm extends React.Component {
    render() {
        const { inputFields, actionHandlers } = this.props
        return (
            <div className="content">
                {
                    inputFields.map(input => {
                        return <InputField {...input}/>
                    })
                }
                {
                    actionHandlers.map(action => {
                        return <Button {...action}/>
                    })
                }
            </div>)
    }
}