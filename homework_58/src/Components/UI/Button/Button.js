import React from 'react';
import './Button.css';

const Button = props => (
    <button
        key={props.key}
        className={['btn', props.class].join(' ')}
        type={['button', props.type].join(' ')}
        onClick={props.clicked}
    >
        {props.label}
    </button>
);

export default Button;