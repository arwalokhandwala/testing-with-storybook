import React from 'react'
import PropTypes from 'prop-types';

import './index.css'

export const Button = ({ view: { name = "Submit", disabled = true }, onClick = () => { } }) => {
    return (<button
        onClick={onClick}
        disabled={disabled}
        className={disabled ? "inactive" : "active"}
    >
        {name}
    </button>)
}

Button.propTypes = {
    view: PropTypes.shape({
        name: PropTypes.string.isRequired,
        disabled: PropTypes.bool.isRequired
    }),
    onClick: PropTypes.func,
};