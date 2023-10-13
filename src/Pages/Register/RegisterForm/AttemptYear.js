import React, { useEffect, useState } from 'react';
import { ButtonColors, RegisterPageConstantLines } from '../../../Components/Services';
import { useLocation, useNavigate } from 'react-router-dom';
// import LottieImage from '../../../Components/LottieImage/LottieImage';
import pencil from '../../../Images/LottieImages/pencil-animation.json'
import { BACKEND_URLS, FRONTEND_URLS } from '../../../Routes/Routes';
import { AxiosClient } from '../../../Axios/AxiosCLient';

const AttemptYear = () => {
    console.log("AttemptYear")
    const { state } = useLocation()
    const [target, setTarget] = useState()
    const navigate = useNavigate()

    useEffect(
        () => {
            AxiosClient.get(BACKEND_URLS.GET_ALL_TARGETS).then(
                (resp) => {
                    console.log('resp', resp)
                    console.log("resp.data.classes", resp.data.data.classes)
                    setTarget(resp.data.data.classes)
                }
            ).catch(
                (err) => {
                    console.log('under the error', err)
                }
            )
        }, []
    )


    return (
        <div className='Form-phone Attempt-year-Form'>
            {
                !target
                    ?
                    <>
                        Loading...
                    </>
                    :
                    <>
                        <div className='Form-text-input'>
                            <div className='Form-text'>
                                <div className='Form-heading1'> Hi, {state}👋 </div>
                                <div className='Form-heading3'>{RegisterPageConstantLines.AttemptYear.subTitle}</div>
                            </div>

                            <div className='Form-input'>
                                <div className='Form-lottie'>
                                    <LottieImage animationData={pencil} Isloop={false} />
                                </div>
                                <div className='Year-heading'>{RegisterPageConstantLines.AttemptYear.subTitle1}</div>
                            </div>
                        </div>

                        <div className='Form-button Name-Button grid-container'>
                            {
                                target.map(
                                    (item, key) => {
                                        return (
                                            <div className="Year-Button grid-button pseudo-button" key={key} style={{
                                                border: `1px solid ${ButtonColors[key%ButtonColors.length].background}`,
                                                background: ButtonColors[key].BorderColor
                                            }}
                                            onClick={() => {
                                                navigate(FRONTEND_URLs.REGISTER_ROUTE + '/' +'exam', {state: {targets:item.targets, name:state}})
                                            }}>
                                                {item.class_name}
                                            </div>
                                        )
                                    }
                                )
                            }
                        </div>
                    </>
            }
        </div>
    );
};

export default AttemptYear;