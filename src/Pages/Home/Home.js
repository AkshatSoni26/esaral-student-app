import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { FRONTEND_URLS } from '../../Routes/Routes';

const Home = () => {
    console.log("Home")
    const navigate = useNavigate()

    useEffect(
        () => {
            if(!localStorage.getItem('access')) {
                localStorage.clear()
                navigate(FRONTEND_URLS.LOGIN_ROUTE)
            }
        }, []
    )

    return (
        <div>
            Home
        </div>
    );
};

export default Home;