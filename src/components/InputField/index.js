import React from 'react'

import './index.css'

export const InputField = ({ structure: { type = "text", name, placeholder, value }, onKeyPress }) => {
    return <input
        type={type}
        onKeyPress={onKeyPress}
        placeholder={placeholder}
        value={value}
    />
}