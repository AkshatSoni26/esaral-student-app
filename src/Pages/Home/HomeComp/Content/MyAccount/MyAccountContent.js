import React from 'react';
import { HomeMenuList } from '../../../../../Components/Services';
import InnerCardStyle from './InnerCardStyle';
import { FiLogOut } from 'react-icons/fi';
import { createRipple } from '../../../../../Components/Buttons/Functions/ButtonRippleFun';
import { useNavigate } from 'react-router-dom';
import { FRONTEND_URLS } from '../../../../../Routes/Routes';
import { FiEdit2 } from 'react-icons/fi';
import { BsClock } from 'react-icons/bs'
import { formatDate } from '../../../../../Functions/Functions'


const MyAccountContent = () => {
    const { user, enrollments } = JSON.parse(localStorage.getItem('user'))
    const navigate = useNavigate()

    function Logout() {
        localStorage.clear();
        navigate(FRONTEND_URLS.LOGIN_ROUTE)
    }
    return (
        <div className='MyAccountContent'>
            {
                user
                    ?
                    <>
                        {/*------------------------------------------- My-Account ---------------------------------------*/}
                        < div className='My-Account-Card Card-Style' style={{
                            height: '29vh',
                            marginTop: '0%',
                        }} >
                            <div className='Inner-Card-Text '>
                                <div>
                                    {HomeMenuList[1][0]}
                                </div>
                                &nbsp;
                                <div>
                                    {HomeMenuList[1][1]}
                                </div>
                            </div>
                            <InnerCardStyle ButtonFun={() => {
                                console.log("Edit is Clicked.")
                            }} Name={user.full_name} NumberProp={`+91 ${user.phone_number}`} ButtonName={`Edit`} style={{ marginTop: "0px", }} >
                                <FiEdit2 />
                            </InnerCardStyle>
                        </div>
                        {/*------------------------------------------- My Targets ---------------------------------------*/}

                        <div className='My-Account-Card Card-Style' style={{
                            height: '40vh',
                        }}>
                            <div className='Inner-Card-Text'>
                                <div>
                                    {HomeMenuList[2][0]}
                                </div>
                                &nbsp;
                                <div>
                                    {`My Targets`}
                                </div>
                            </div>
                            <div style={{
                                overflowY: "auto",
                                height: "30vh",
                            }}>
                                {
                                    enrollments.map(
                                        (enrollment, key) => {
                                            return (
                                                <InnerCardStyle is_current={enrollment.subcourses.find((e) => e.is_current == true)?.is_current} key={key} Name={enrollment.course_name} NumberProp={`Started on: ${formatDate(enrollment.enroll_date)}`} ButtonName={`See History`} style={{ marginTop: "0px", marginBottom: '20px' }} >
                                                    <BsClock />
                                                </InnerCardStyle>
                                            )
                                        }
                                    )
                                }
                            </div>
                        </div>

                        {/*------------------------------------------- Log Out ---------------------------------------*/}

                        <div className='My-Account-Card Card-Style Log-out Logout-height pseudo-button' onClick={(e) => {
                            createRipple({ event: e, className: "ripple-secondary" });
                            Logout();
                        }} >

                            <div style={{
                                display: 'flex',
                                width: "100px",
                                justifyContent: 'space-between',
                            }} >
                                <FiLogOut style={{
                                    marginLeft: '20px'
                                }} />
                                <div>Logout</div>
                            </div>
                        </div>
                    </>
                    :
                    <>Loading...</>
            }
        </div >
    );
};

export default MyAccountContent;