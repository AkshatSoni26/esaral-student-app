import React from 'react';
import FaculityCarusal from '../FaculityCarusal';
import SelectionCarousal from '../SelectionCarousal';
import SubjectButtons from '../SubjectButtons';

const HomeContent = () => {
    const USER = JSON.parse(localStorage.getItem('user'))
    return (
        <div className='HomeContent'>
            {
                USER ?
                    <>
                        <div className='Home-Name-Part common-margin'>
                            <div className='Home-Name' >Hi, {USER.user.full_name} 👋</div>
                            <div className='Home-Name-subtitle'> Let’s start your prepration here. </div>
                        </div>

                        <div className='common-margin' style={{
                                marginRight: "5px",
                        }}>
                            <SubjectButtons subjects={USER.subjects} />
                        </div>

                        <div>
                            <div className='Home-Name common-margin'> Know Your Faculty </div>
                            <FaculityCarusal faculties={USER.faculties} />
                        </div>

                        <div>
                            <div className='Home-Name common-margin'> Selections </div>
                            <SelectionCarousal selections={USER.selection} />
                        </div>
                    </>
                    :
                    <>Loading...</>
            }
        </div>
    );
};

export default HomeContent;