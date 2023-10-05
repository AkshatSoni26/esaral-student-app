import React from 'react';
import { createRipple } from './Functions/ButtonRippleFun';
import './Button.css'


const TraniaryButton = ({ ButName, ButFun, style }) => {

    return (
        <div>
            <div className='CommonFlexHorizontalClass Primary-Button Traniary-Button' style={style} onClick={(e) => {
                createRipple({event:e, className:"ripple-secondary"});
                ButFun();
            }}>
                {ButName}
            </div>
        </div>
    );
};

export default TraniaryButton;

TraniaryButton.defaultProps = {
    ButName: "TraniaryButton",
    ButFun: () => {
        console.log("secondary button clicked.")
    },
}