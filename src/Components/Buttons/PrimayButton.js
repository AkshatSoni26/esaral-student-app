import React from 'react';
import { createRipple } from './Functions/ButtonRippleFun';
import './Button.css';

const PrimayButton = ({ children = "PrimayButton", ButFun, style  }) => {

    return (
        <div typeof='submit' className='CommonFlexHorizontalClass Primary-Button' style={style} onClick={(e) => {createRipple({event:e, className:"ripple-primary"});
        ButFun() }}>
            {children}
        </div>
    );
};

export default PrimayButton;


PrimayButton.defaultProps = {
    ButName: "PrimayButton",
    ButFun: () => {
        console.log("PrimayButton button clicked.")
    },
}