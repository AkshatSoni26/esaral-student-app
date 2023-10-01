import React, { useState } from "react";
import Caursal from "../../Components/Caursal/Caursal";
import { CaursalImages } from "../../Components/Services";
import { useParams } from "react-router-dom";
import Name from "./RegisterForm/Name";
import { AxiosClient } from "../../Axios/AxiosCLient";
import { BACKEND_URLS } from "../../Routes/Routes";
import AttemptYear from "./RegisterForm/AttemptYear";
import Exam from "./RegisterForm/Exam";

const Register = () => {
    console.log("Register");

    const { param } = useParams();
    console.log("Register", param);

    return (
        <div className="login">
            <div className="login-caursal">
                <Caursal imgList={CaursalImages} />
            </div>
            <div className="login-info">
                <div className="Form" style={{
                    height: `${(param !== "name") ? "60%" : ''}`
                }}>
                    {
                        param == "name" ? <Name /> :
                            param == "year" ? <AttemptYear /> :
                                param == "exam" ? <Exam />
                                    : null
                    }
                </div>
            </div>
        </div>
    );
};

export default Register;
