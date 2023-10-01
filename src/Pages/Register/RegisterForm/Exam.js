import React, { useEffect, useState } from 'react';
import { ButtonColors, RegisterPageConstantLines } from '../../../Components/Services';
import { useLocation, useNavigate } from 'react-router-dom';
import LottieImage from '../../../Components/LottieImage/LottieImage';
import target from '../../../Images/LottieImages/target.json'
import { BACKEND_URLS, FRONTEND_URLS } from '../../../Routes/Routes';
import { AxiosClient } from '../../../Axios/AxiosCLient';
import { UserData } from '../../../Functions/Functions';

const Exam = () => {
    console.log("Exam")
    const { name, targets } = useLocation().state
    const navigate = useNavigate()

    function EnrollStudent(id) {
        AxiosClient.post(
            BACKEND_URLS.NEW_ENROLLMENTS,
            {
                'target_course_id': id,
            }
        ).then(
            (resp) => {
                console.log('CourseSettingup resp', );
                if(resp.data.success) {
                    UserData(navigate)
                }
            }
        ).catch(
            (err) => {
                console.log("CourseSettingup err", err);
            }
        );
    }

    return (
        <div className='Form-phone Attempt-year-Form'>
            {
                <>
                    <div className='Form-text-input'>
                        <div className='Form-text'>
                            <div className='Form-heading1'> Hi, {name}👋 </div>
                            <div className='Form-heading3'>{RegisterPageConstantLines.Exam.subTitle}</div>
                        </div>

                        <div className='Form-input'>
                            <div className='Form-lottie'>
                                <LottieImage animationData={target} Isloop={false} />
                            </div>
                            <div className='Year-heading'>{RegisterPageConstantLines.Exam.subTitle1}</div>
                        </div>
                    </div>

                    <div className='Form-button Name-Button grid-container'>
                        {
                            targets.map(
                                (item, key) => {
                                    return (
                                        <div className="Exam-Button grid-button pseudo-button" key={key} style={{
                                            border: `1px solid ${ButtonColors[key % ButtonColors.length].background}`,
                                            background: ButtonColors[key].BorderColor,
                                            alignItems: "flex-start",
                                            justifyContent: "space-evenly",
                                        }}
                                            onClick={() => {
                                                EnrollStudent(item.target_course_id)
                                            }}
                                        >
                                            <img className='Exam-item' style={{
                                                height: "36px",
                                                width: '36px',
                                            }} src={item.thumbnail} />
                                            <div style={{
                                                width: "100%",
                                            }}>
                                                <div className='Exam-item Exam-target_name'>{item.target_name}</div>
                                                <div className='Exam-item Exam-tag_line'>{item.tag_line}</div>
                                            </div>
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

export default Exam;