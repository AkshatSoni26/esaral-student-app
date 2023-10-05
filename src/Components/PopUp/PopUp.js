import React, { useEffect, useState } from 'react';
import PrimayButton from '../Buttons/PrimayButton';
import TraniaryButton from '../Buttons/TraniaryButton';
import { useDispatch, useSelector } from 'react-redux';
import { AppReducerConstants } from '../../Redux/App/ReducerConstants/ReducerConstants';
import SimplePopUp from './SimplePopUp';
import { FiAlertCircle } from 'react-icons/fi';
import { RegisterPageConstantLines } from '../Services';
import { AxiosClient } from '../../Axios/AxiosCLient';
import { BACKEND_URLS, FRONTEND_URLS } from '../../Routes/Routes';
import { UserData } from '../../Functions/Functions';
import { useNavigate } from 'react-router-dom';

const PopUp = () => {

    const dispatch = useDispatch()
    const navigate = useNavigate()
    const user = JSON.parse(localStorage.getItem('user')).user
    const [name, setName] = useState(user?.full_name ?? '')
    const [warn, setWarn] = useState(false)
    const phoneNumber = user?.phone_number ?? ''

    function Cancel() {
        dispatch({ type: AppReducerConstants.IS_OVERLAY, payload: false })
    }

    const format = /^[A-Za-z\u0900-\u097F][A-Za-z\u0900-\u097F\s]*$/;

    function InputChecker() {
        if (name.length > 0 && format.test(name)) {
            setWarn(false)
        }
        else {
            setWarn(true)
        }
    }

    function NameTaker(name) {
        // set the name to the  server
        if (name.length > 0 && format.test(name)) {
            AxiosClient.post(BACKEND_URLS.SET_NAME, {
                full_name: name,
            }).then((resp) => {
                console.log(resp)
                if (resp.data.success == true) {
                    // alert("Your Name is Successfully Saved.");
                    UserData(navigate, FRONTEND_URLS.MY_ACCOUNT)
                    Cancel()
                    // navigate(FRONTEND_URLS.REGISTER_ROUTE+'/'+'year', {state: name})
                }
            })
                .catch(
                    (err) => {
                    // console.log('err', err)
                    alert(
                        "Their is an error occured in Saving your updated name. Please Try again after the some time.", err.message
                    );
                });
        }
    }

    useEffect(
        () => {
            document.addEventListener("input", InputChecker);

            return () => document.removeEventListener('input', InputChecker)
        }, [name]
    )

    return (
        // <form method=''>
        <div className='PopUp-Contanier'>
            {
                user
                    ?
                    <div className='PopUp-modal'>

                        <div className='Pop-Box-Second-Contanier'>
                            <div>
                                <div>
                                    <div className='PopUp-Input-Field-label' >Name</div>
                                    <div style={{
                                        // width: "88%",
                                    }}>
                                        <input className='PopUp-Input-Field' value={name} onChange={(e) => { setName(e.target.value) }} autoFocus />
                                        {warn && <div id='phone-number-warning' className='warning'>
                                            <FiAlertCircle />  &nbsp;  {name.length == 0 ? RegisterPageConstantLines.name.warning2 : RegisterPageConstantLines.name.warning1}
                                        </div>}
                                    </div>
                                </div>

                                <div>
                                    <div className='PopUp-Input-Field-label'>Phone Number</div>
                                    <div style={{
                                        // width: "88%",
                                    }}>
                                        <input className='PopUp-Input-Field' placeholder={phoneNumber} readOnly />
                                    </div>
                                </div>
                            </div>

                            {!warn &&
                                <div style={{
                                    display: "flex",
                                    justifyContent: "space-between",
                                }}>
                                    <PrimayButton style={{
                                        fontSize: '1rem',
                                        height: "8px",
                                        width: "32px",
                                    }} ButFun={() => {
                                        NameTaker(name)
                                    }} >
                                        Submit
                                    </PrimayButton>
                                    <div>
                                        <TraniaryButton style={{
                                            fontSize: '1rem',
                                            height: "4px",
                                            width: "32px",
                                        }} ButName={`Cancel`} ButFun={Cancel} />
                                    </div>
                                </div>
                            }
                        </div>

                    </div>
                    :
                    <>Loading...</>
            }
        </div>
        //  </form>
    );
};

export default PopUp;