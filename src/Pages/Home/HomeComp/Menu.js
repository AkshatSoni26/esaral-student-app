import React from 'react';
import { HomeMenuList, logo, } from '../../../Components/Services';
import HomeMenuListItem from './HomeMenuListItem'


const Menu = ({setIsMenu}) => {
    return (
        <div className='Home-Menu'>
            <img className='company-logo' src={logo} />
            <div className='Home-menu-item'>
                {
                    HomeMenuList.map(
                        (item, key) => {
                            return (
                                <HomeMenuListItem setIsMenu={setIsMenu} item={item} key={key} />
                            )
                        }
                    )
                }
            </div>
        </div>
    );
};

export default Menu;