import React from 'react';
import { createRipple } from './Functions/ButtonRippleFun';
import './Button.css';

const PrimayButton = ({ children = "PrimayButton", ButFun = () => { console.log("Primay button clicked."); } }) => {

    return (
        <div className='CommonFlexHorizontalClass Primary-Button' onClick={(e) => createRipple(e, ButFun)}>
            {children}
        </div>
    );
};

export default PrimayButton;
