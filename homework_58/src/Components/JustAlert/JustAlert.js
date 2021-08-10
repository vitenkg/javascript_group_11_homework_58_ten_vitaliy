import React, {useState} from 'react';
import './JustAlert.css';

const JustAlert = ({children, dismiss, type}) => {
    const [justClose, setJustClose] = useState(false);

    let justColor = '';
    let justTextColor = '';
    switch (type) {
        case 'Primary':
            justColor = 'white';
            justTextColor = 'black';
            break;
        case 'Success':
            justColor = 'lightgreen';
            justTextColor = 'black';
            break;
        case 'Danger':
            justColor = 'red';
            justTextColor = 'white';
            break;
        case 'Warning':
            justColor = 'yellow';
            justTextColor = 'green';
            break;
        default:
            justColor = 'white';
    }

    const close = () => {
        setJustClose(true);
    };

    let justAlertComponentDismiss = (
        <div
            className="JustAlert"
            style={{background: justColor, color: justTextColor}}
        >
            <button
                onClick={close}
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
            className="JustAlert"
            onClick={close}
            style={{background: justColor, color: justTextColor}}
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