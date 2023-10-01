import React from 'react';
import { AiOutlineArrowLeft } from 'react-icons/ai'
import { useNavigate } from 'react-router-dom'

const NavBar = ({ NavBarName, NavBarRightPortionElement, isArrow, ArrSize, NavBarMiddleName }) => {

    console.log("NavBar")
    const navigate = useNavigate()

    return (
        <div id='NavBar' className='CommonFlexHorizontalClassLeftAndRight'>
            <div className='CommonFlexHorizontalClass'>
                {isArrow && <AiOutlineArrowLeft id='back-arrow' className='Button' size={ArrSize} onClick={() => {
                    console.log("This button is Click")
                    navigate(-1)
                }} />}
                <div className='NavBarName'> {NavBarName} </div>
            </div>

            <div>
                {NavBarMiddleName}
            </div>

            <div>
                {NavBarRightPortionElement}
            </div>
        </div>
    );
};

export default NavBar;

NavBar.defaultProps = {
    NavBarName: "NavBarName",
    NavBarRightPortionElement: '',
    NavBarMiddleName: '',
    isArrow: true,
    ArrSize: '20vh',
}