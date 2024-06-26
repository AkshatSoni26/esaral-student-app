import React from 'react';
import { createRipple } from './Functions/ButtonRippleFun';
import './Button.css'


const SecondaryButton = ({ ButName, ButFun }) => {

    return (
        <div>
            <div className='CommonFlexHorizontalClass Primary-Button Secondary-Button' onClick={(e) => {
                createRipple({event:e, className:"ripple-secondary"});
                ButFun();
            }}>
                {ButName}
            </div>
        </div>
    );
};

export default SecondaryButton;

SecondaryButton.defaultProps = {
    ButName: "SecondaryButton",
    ButFun: () => {
        console.log("secondary button clicked.")
    },
}