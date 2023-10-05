import React, { memo, useState } from 'react';
import HomeNavbar from './HomeComp/HomeNavbar';
import HomeContent from './HomeComp/Content/HomeContent';
import Menu from './HomeComp/Menu';
import MyAccountContent from './HomeComp/Content/MyAccount/MyAccountContent';
import CoursesContent from './HomeComp/Content/CoursesContent';
import MentorshipContent from './HomeComp/Content/MentorshipContent';
import DoubutSolveContent from './HomeComp/Content/DoubutSolveContent';
import HelpAndSupportContent from './HomeComp/Content/HelpAndSupportContent';
import { useLocation } from 'react-router-dom';
import { formatString } from '../../Functions/Functions';
import { HomeMenuList } from '../../Components/Services';
import { useSelector } from 'react-redux';
import PopUp from '../../Components/PopUp/PopUp';

const Home = () => {
    console.log("Home")
    const ConditionForContentRedring = formatString(useLocation().pathname)
    const isOverlay = useSelector(state => state.app?.isOverlay)

    return (
        <div className='main-grid-container Home'>
            {isOverlay &&
                <>
                    <PopUp />
                    <div className='overlay1'></div>
                </>
            }

            <div className='menu Home-menu'>
                <Menu />
            </div>

            <div className='content main-grid-vertical-container'>

                <div className='grid-navbar Home-NavBar'>
                    <HomeNavbar Name={ConditionForContentRedring} />
                </div>

                <div className='grid-content Home-content'>
                    {
                        HomeMenuList[1][1] == ConditionForContentRedring
                            ?
                            <MyAccountContent />
                            :
                            HomeMenuList[2][1] == ConditionForContentRedring
                                ?
                                <CoursesContent />
                                :
                                HomeMenuList[3][1] == ConditionForContentRedring
                                    ?
                                    <MentorshipContent />
                                    :
                                    HomeMenuList[4][1] == ConditionForContentRedring
                                        ?
                                        <DoubutSolveContent />
                                        :
                                        HomeMenuList[5][1] == ConditionForContentRedring
                                            ?
                                            <HelpAndSupportContent />
                                            :
                                            <HomeContent />

                    }
                </div>
            </div>
        </div>
    );
};

export default memo(Home);