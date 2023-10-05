import React, { useState } from 'react';
import { FiSearch } from 'react-icons/fi'
import { TbMenuDeep } from 'react-icons/tb'
import Menu from './Menu';
import { ICON_SIZE } from '../../../Components/Services';


const HomeNavbar = ({ Name }) => {
    console.log("HomeNavbar")
    const [isMenu, setIsMenu] = useState(false)
    console.log("Name",Name,)
    return (
        <div className='Home-NavBar'>
            {isMenu &&
                <div className='menu'>
                    <Menu setIsMenu={setIsMenu} />
                    <div className='overlay'></div>
                </div>
            }
            <div>
                {!isMenu &&
                    <div style={{
                        display: "flex",
                        alignItems: "stretch",
                    }}>
                        <div className={`Home-NavBar-Menu pseudo-button ${isMenu && 'Home-NavBar-Menu-Rotate'}`} style={{
                            marginLeft: '20px',
                        }} onClick={() => {
                            setIsMenu(true)
                        }}>
                            <TbMenuDeep size={25} color='#3E3A4C'/>
                        </div>
                        &nbsp;&nbsp;
                         <div className='Home-NavBar-Name IsPhoneAndTab'>
                         { Name !== 'Home' ? Name : 'JEE (12th)'}
                        </div>
                    </div>
                }
            </div>
            <div>
                <FiSearch size={ICON_SIZE} />
            </div>
        </div>
    );
};

export default HomeNavbar;