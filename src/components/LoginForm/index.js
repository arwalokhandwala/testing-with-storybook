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
                    inputFields.map((input,i) => {
                        return <InputField key={`input-${i}`}{...input}/>
                    })
                }
                {
                    actionHandlers.map((action,i) => {
                        return <Button key={`action-${i}`} {...action}/>
                    })
                }
            </div>)
    }
}