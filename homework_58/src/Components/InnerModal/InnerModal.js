import React from 'react';
import './InnerModal.css';

const InnerModal = props => {
    return (
        <>
            <button onClick={props.close} type="button" className="btn-close" aria-label="Close"> </button>
            <h4>{props.textHeader}</h4>
            <p>{props.textBody}</p>
        </>
    );
};

export default InnerModal;