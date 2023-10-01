import React from 'react';
import Caursal from '../../Components/Caursal/Caursal';
import './CSS/Login.css'
import { CaursalImages } from '../../Components/Services';
import Verifie from './Login_Forms/Verifie';


const Login = () => {
    console.log("Login")

    return (
        <div className='login'>
            <div className='login-caursal'>
                <Caursal imgList={CaursalImages} />
            </div>
            <div className='login-info'>
                <Verifie/>
            </div>
        </div>
    );
};

export default Login;