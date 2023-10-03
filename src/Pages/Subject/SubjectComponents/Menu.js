import React, { memo } from 'react';
import { logo } from '../../../Components/Services';
import MenuContent from './MenuContent';

const  Menu = ({ data }) => {

    return (
        <>
            <img className='company-logo' src={logo} />
            <MenuContent data ={data} />            
        </>
    );
};

export default memo(Menu);