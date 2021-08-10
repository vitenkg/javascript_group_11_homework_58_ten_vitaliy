import React, {useState} from 'react';
import './JustAlert.css';

const JustAlert = ({children, dismiss, type}) => {
    const [justClose, setJustClose] = useState(false);
    type = 'alert alert-' + type;

    const close = () => {
        setJustClose(true);
    };

    let justAlertComponentDismiss = (
        <div
            className={['JustAlert', type].join(' ')}
        >
            <button
                onClick={dismiss}
                type="button"
                className="btn-close"
                aria-label="Close"
            > </button>
            <h4>Alert</h4>
            <p>{children}</p>
        </div>
    );

    let justAlertComponent = (
        <div
            className={['JustAlert', type].join(' ')}
            onClick={close}
        >
            <h4>Alert</h4>
            <p>{children}</p>
        </div>
    );

    if (justClose) {
        justAlertComponent = null;
        justAlertComponentDismiss = null;
    }

    return (
        dismiss ? justAlertComponentDismiss : justAlertComponent
    );
};

export default JustAlert;