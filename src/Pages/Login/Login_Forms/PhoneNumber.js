import React from 'react';
import {  InputBoxWithFlag } from '../../../Components/InputBoxWithFlag/InputBoxWithFlag';
import { FiAlertCircle } from 'react-icons/fi';
import { COLOR_CODES, LoginPageConstantLines } from '../../../Components/Services';
import { AiOutlineArrowRight } from 'react-icons/ai';
import PrimayButton from '../../../Components/Buttons/PrimayButton';

const PhoneNumber = ({PhoneRef, OTPSender, warn}) => {
    return (
        <div className='Form-phone'>
            <div className='Form-text-input'>
                <div className='Form-text'>
                    <div className='Form-heading1'>{LoginPageConstantLines.phoneNumber.heading}</div>
                    <div className='Form-heading3'>{LoginPageConstantLines.phoneNumber.subTitle}</div>
                </div>

                <div className='Form-input'>
                    <InputBoxWithFlag PhoneRef={PhoneRef} />
                    {warn && <div id='phone-number-warning' className='warning'>
                        <FiAlertCircle />  &nbsp;  {LoginPageConstantLines.phoneNumber.warning}
                    </div>}
                </div>
            </div>


            <div className='Form-button Form-but'>
                <div className='Form-heading4'>By continuing, you agree to our <a href='https://www.esaral.com/terms-and-condition/'>Terms and Conditions.</a> </div>
                <br />
                <PrimayButton ButFun={() => {
                    OTPSender(PhoneRef.current.value)
                    console.log(PhoneRef.current.value)
                }}>
                    Continue &nbsp; <AiOutlineArrowRight color='#fff' />
                </PrimayButton>
            </div>
        </div>
    );
};

export default PhoneNumber;