import React, { memo, useCallback, useEffect, useState } from 'react';
import { IoIosArrowBack } from 'react-icons/io';
import OTPInput from 'react-otp-input';
import { COLOR_CODES, LoginPageConstantLines } from '../../../Components/Services';
import { FiAlertCircle } from 'react-icons/fi';

const OTPGenrator = ({ warn, setOtp, setOTP, OTP, number, setWarn }) => {

    const [timer, setTimer] = useState(45)

    useEffect(
        () => {
            if (timer > 0) {
                setTimeout(
                    () => {
                        setTimer(timer - 1)
                    }, 1000
                )
            }
        }, [timer]
    )


    return (
        <div className='Form-phone otp-form-class' style={{
            marginTop: "0%"
        }}>

            <div className='pseudo-button' onClick={() => { setOtp(false); setWarn(false); setOTP('') }}>
                <IoIosArrowBack size={30} color='#333A47' />
            </div>

            <div className='Form-text'>
                <div className='Form-heading1'>{LoginPageConstantLines.otp.heading}</div>
                <div className='Form-heading3'>{LoginPageConstantLines.otp.subTitle} {number}</div>
            </div>

            <div>
                <OTPInput
                    value={OTP}
                    onChange={setOTP}
                    numInputs={4}
                    inputType='number'
                    inputStyle='Otp_Box'
                    containerStyle='Otp_Conta'
                    shouldAutoFocus={true}
                    renderInput={(props) => <input {...props} />} />
            </div>

            {warn && <div id='phone-number-warning' style={{
                color: COLOR_CODES.danger,
                display: "flex",
                alignItems: "center",
            }}>
                <FiAlertCircle />  &nbsp;  {LoginPageConstantLines.phoneNumber.warning}
            </div>}

            { (timer > 15) &&<div> {LoginPageConstantLines.otp.resendOtp} &nbsp; 00:{(timer-15 < 10 )? 0 : ''}{timer-15} </div>}

            {(timer <= 15) && <div>
                {LoginPageConstantLines.otp.resendOtp} &nbsp; <span className='otp-links' style={{
                    color: COLOR_CODES.brand
                }}>Resend</span>
            </div>}

            {(timer === 0 ) && <div>
                {LoginPageConstantLines.otp.issue} &nbsp; <span className='otp-links' style={{
                    color: COLOR_CODES.brand
                }}>Contact Us</span>
            </div>}

        </div>
    );
};

export default memo(OTPGenrator);