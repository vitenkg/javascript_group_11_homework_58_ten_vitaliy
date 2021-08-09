import React from 'react';
import BackDrop from "../BackDrop/BackDrop";

const Alert = props => {
    let color;
    let textColor;
    switch (props.type) {
        case 'Primary':
            color = 'white';
            textColor = 'black';
            break;
        case 'Success':
            color = 'lightgreen';
            textColor = 'black';
            break;
        case 'Danger':
            color = 'red';
            textColor = 'white';
            break;
        case 'Warning':
            color = 'yellow';
            textColor = 'green';
            break;
        default: color = 'white';
    }

    return (
        <>
            <BackDrop show={props.show}/>
            <div
                className="Modal"
                style={{
                    transform: props.show ? 'translateY(0)' : 'translateY(-100vh)',
                    opacity: props.show ? '1' : '0',
                    backgroundColor: color,
                }}
                onClick={props.close}
            >
                <h4 style={{color: textColor}}>Alert</h4>
                <p>
                    {props.children}
                </p>
            </div>
        </>
    );
};

export default Alert;