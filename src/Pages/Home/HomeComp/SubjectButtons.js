import React from 'react';
import { ButtonColors } from '../../../Components/Services';
import { useNavigate } from 'react-router-dom';
import { FRONTEND_URLS } from '../../../Routes/Routes';

const SubjectButtons = ({subjects}) => {

    const navigate = useNavigate()

    return (
        <div className='HomeSubjectButtons'>
            {
              subjects &&  subjects.map(
                    (subject, id) => {
                        return (
                            <div className='Subject-Button pseudo-button' style={{
                                backgroundColor: `${ButtonColors[id % subjects.length].BorderColor}`,
                            }} key={id} onClick={() => {
                                navigate( FRONTEND_URLS.HOME_ROUTE + subject.node_id )
                            }}>
                                <img className='Subject-Button-img subject-button-padding' src={subject.thumbnail} />
                                <div className='subject-button-padding Home-Name'>{subject.display_name}</div>
                                <div className='subject-button-padding'><div className='Progress-bar' >
                                    <div className='Progress-bar-percentage' style={{
                                        backgroundColor: ButtonColors[0].BorderColor,
                                        width: (subject.content_consumed_in_sec) / (subject.total_duration_in_sec)
                                    }}></div>
                                </div></div>
                                <div className='subject-button-padding subject-button-progress'>Progress: <strong> {(subject.content_consumed_in_sec) / (subject.total_duration_in_sec)}% </strong></div>
                            </div>
                        )
                    }
                )
            }


        </div>
    );
};

export default SubjectButtons;