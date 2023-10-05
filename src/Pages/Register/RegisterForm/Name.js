import React, { memo, useEffect, useState } from 'react';
import PrimayButton from '../../../Components/Buttons/PrimayButton';
import { RegisterPageConstantLines } from '../../../Components/Services';
import InputBox from '../../../Components/InputBox/InputBox';
import { AiOutlineArrowRight } from 'react-icons/ai';
import { FiAlertCircle } from 'react-icons/fi';
import { AxiosClient } from '../../../Axios/AxiosCLient';
import { BACKEND_URLS, FRONTEND_URLS } from '../../../Routes/Routes';
import { useNavigate } from 'react-router-dom';

const Name = ({}) => {
    console.log("Name")

    const [warn, setWarn] = useState(false)
    const [name, setName] = useState('')
    const navigate = useNavigate()
    const format = /^[A-Za-z\u0900-\u097F][A-Za-z\u0900-\u097F\s]*$/;
    
    function InputChecker(name) {
        if (name.length > 0 && format.test(name)) {
            setWarn(false)
        }
        else {
            setWarn(true)
        }
    }

    useEffect(
        () => {
            document.addEventListener("input", InputChecker);

            return () => document.removeEventListener('input',InputChecker )
        }, [name]
    )

    function NameTaker(name) {
        // set the name to the  server
        if (name.length > 0 && format.test(name)) {
            AxiosClient.post(BACKEND_URLS.SET_NAME, {
                full_name: name,
            }).then((resp) => {
                console.log(resp)
                    if (resp.data.success == true) {
                        alert("Your Name is Successfully Saved.");
                        navigate(FRONTEND_URLS.REGISTER_ROUTE+'/'+'year', {state: name})
                    }
                })
                .catch((err) => {
                    alert(
                        "Their is an error occured in Saving your updated name. Please Try again after the some time."
                    );
                });
        }
    }

    return (
        <div className='Form-phone'>
            <div className='Form-text-input'>
                <div className='Form-text'>
                    <div className='Form-heading1'> Hi👋 </div>
                    <div className='Form-heading3'>{RegisterPageConstantLines.name.subTitle}</div>
                </div>

                <div className='Form-input'>
                    <div className='Name-heading3'>{RegisterPageConstantLines.name.subTitle2}</div>
                    <div ><InputBox value={name} setValue={setName} exp={RegisterPageConstantLines.name.placholder} /></div>
                    {warn && <div id='phone-number-warning' className='warning'>
                        <FiAlertCircle />  &nbsp;  {name.length == 0 ? RegisterPageConstantLines.name.warning2 : RegisterPageConstantLines.name.warning1}
                    </div>}
                </div>
            </div>

            <div className='Form-button Name-Button'>
                <PrimayButton ButFun={() => {
                    NameTaker(name)
                }}>
                    Continue &nbsp; <AiOutlineArrowRight color='#fff' />
                </PrimayButton>
            </div>
        </div>
    );
};

export default memo(Name);