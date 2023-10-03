import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { formatString } from '../../../Functions/Functions';


const HomeMenuListItem = ({ item, setIsMenu }) => {
    console.log("HomeMenuListItem")
    const navigate = useNavigate()

    const condition = formatString(useLocation().pathname) == item[1]

    return (
        <div className={`pseudo-button menu-item ${condition ? "menu-item-active" : ''} `}
            onClick={() => {
                setIsMenu(false)
                navigate(item[2])
            }}>
                
            <div className={`${(condition) ? "active-item" : ''}`}></div>
            <div style={{
                marginRight: '12px',
            }} className={`Home-item-style ${(condition) ? "item-active-color" : 'item-color'}`}>{item[0]}</div>
            <div>{item[1]}</div>
        </div>
    );
};

export default HomeMenuListItem;

HomeMenuListItem.defaultProps = {
    setIsMenu : () => {
        console.log("setIsMenu")
    }
}