import React from 'react';
import './InnerModal.css';
import Button from "../UI/Button/Button";

const InnerModal = props => {
    const buttons =[
        {type: 'primary', label: 'Continue', class: 'btn-primary', clicked: props.continued, id: 0},
        {type: 'danger', label: 'Close', class: 'btn-danger', clicked: props.close, id: 1}
    ]
    return (
        <>
            <div>
                <button onClick={props.close} type="button" className="btn-close" aria-label="Close"> </button>
                <h4>{props.textHeader}</h4>
                <p>{props.textBody}</p>
            </div>
            <div>
                {buttons.map(b=> (
                    <Button
                        key={buttons.id}
                        type={b.type}
                        label={b.label}
                        class={b.class}
                        clicked={b.clicked}/>
                ))}
            </div>
        </>
    );
};

export default InnerModal;