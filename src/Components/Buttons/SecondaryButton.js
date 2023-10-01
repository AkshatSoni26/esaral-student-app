import React from 'react';
import { createRipple } from './Functions/ButtonRippleFun';
import './Button.css'


const SecondaryButton = ({ ButName, ButFun = () => {
    console.log("secondary button clicked.")
} }) => {

    return (
        <div>
            <div className='CommonFlexHorizontalClass Primary-Button Secondary-Button' onClick={(e) => createRipple(e, ButFun)}>
                {ButName}
            </div>
        </div>
    );
};

export default SecondaryButton;

SecondaryButton.defaultProps = {
    ButName: "SecondaryButton"
}