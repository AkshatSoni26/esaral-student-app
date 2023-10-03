import React, { memo } from 'react';
import HomeNavbar from './HomeComp/HomeNavbar';
import HomeContent from './HomeComp/Content/HomeContent';
import Menu from './HomeComp/Menu';
import MyAccountContent from './HomeComp/Content/MyAccountContent';
import CoursesContent from './HomeComp/Content/CoursesContent';
import MentorshipContent from './HomeComp/Content/MentorshipContent';
import DoubutSolveContent from './HomeComp/Content/DoubutSolveContent';
import HelpAndSupportContent from './HomeComp/Content/HelpAndSupportContent';
import { useLocation } from 'react-router-dom';
import { formatString } from '../../Functions/Functions';
import { HomeMenuList } from '../../Components/Services';

const Home = () => {
    console.log("Home")
    const ConditionForContentRedring = formatString(useLocation().pathname)

    return (
        <div className='main-grid-container Home'>

            <div className='menu Home-menu'>
                <Menu />
            </div>

            <div className='content main-grid-vertical-container'>

                <div className='grid-navbar Home-NavBar'>
                    <HomeNavbar />
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