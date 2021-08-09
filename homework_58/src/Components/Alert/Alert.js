import React from 'react';
import './Alert.css';

const Alert = ({children, dismiss, show, type}) => {
    let color;
    let textColor;
    switch (type) {
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
            <div
                className="Alert"
                onClick={dismiss}
                style={{
                    transform: show ? 'translateY(0)' : 'translateY(-100vh)',
                    opacity: show ? '1' : '0',
                    background: color,
                }}
            >
                <h4 style={{color: textColor}}>Alert</h4>
                <p>
                    {children}
                </p>
            </div>
        </>
    );
};

export default Alert;