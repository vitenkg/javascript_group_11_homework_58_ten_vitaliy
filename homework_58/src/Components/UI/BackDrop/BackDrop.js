import React from 'react';
import './BackDrop.css';

const BackDrop = ({show, onClick, }) => (
    show ? <div className="Backdrop" onClick={onClick}/> : null
);

export default BackDrop;