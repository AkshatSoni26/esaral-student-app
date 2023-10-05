import React, { useState } from 'react';
import { createRipple } from '../../../../../Components/Buttons/Functions/ButtonRippleFun';
import { useDispatch, useSelector } from 'react-redux';
import { AppReducerConstants } from '../../../../../Redux/App/ReducerConstants/ReducerConstants';


/**
 * @Name this prop is first line which is want to address.
 * @NumberProp this prop is second line.
 * @ButtonName this is ButtonName which you want to present.
 * @ButtonFun this is function of Button which we want to do this.'
 * @returns 
 */

const InnerCardStyle = ({ children, Name, NumberProp, ButtonFun, ButtonName, style, is_current=false }) => {

    const dispach = useDispatch()

    function isOverlayFun() {
        dispach({type: AppReducerConstants.IS_OVERLAY, payload: true})
    }
    return (      
        <div className='Inner-Card-style' style={style}>
            <div style={{
                    width: "88%",
                    display: "flex",
                    justifyContent: "space-between",
            }}>
                <div className='My-Account-Name'>{Name}</div>
                { is_current && <div className='Enrolled'>Enrolled</div> }
            </div>
            <div className='My-Account-Number'>{NumberProp}</div>
            <div className='My-Account-But pseudo-button' onClick={(e) => {
                createRipple({ event: e, className: "ripple-secondary" });
                ButtonFun();
                isOverlayFun();
            }} > {children} &nbsp; {ButtonName}</div>
        </div>
    );
};

export default InnerCardStyle;

InnerCardStyle.deefaultProps = {
    Name: '',
    NumberProp: '',
    ButtonName: '',
    ButtonFun: () => {
        console.log("Button Function is called.")
    }
}