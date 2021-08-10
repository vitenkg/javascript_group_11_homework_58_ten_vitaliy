import React from 'react';
import './Alert.css';

const Alert = ({children, dismiss, show, type}) => {
    type = 'alert alert-' + type;

    return (
        <>
            <div
                className={['Alert', type].join(' ')}
                onClick={dismiss}
                style={{
                    transform: show ? 'translateY(0)' : 'translateY(-100vh)',
                    opacity: show ? '1' : '0',

                }}
            >
                <h4>Alert</h4>
                <p>
                    {children}
                </p>
            </div>
        </>
    );
};

export default Alert;