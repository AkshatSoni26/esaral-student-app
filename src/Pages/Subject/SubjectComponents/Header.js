import React, { memo } from 'react';
import { FiArrowLeft, FiSearch } from 'react-icons/fi';
import { ICON_SIZE } from '../../../Components/Services';
import { useNavigate, useParams } from 'react-router-dom';

const Header = () => {
    console.log("Header")
    const navigate = useNavigate()
    const { subject_node_id } = useParams()
    const subjects = JSON.parse(localStorage.getItem('user')).subjects
    const SubjectName = subjects?.find(
        (e) => {
            return e.node_id === Number(subject_node_id);
        }
    ).display_name;

    return (
        <>
            <div className='Subject-Name'>
                <div>
                    <FiArrowLeft className='pseudo-button' size={ICON_SIZE} onClick={() => {
                        navigate(-1)
                    }} style={{
                        marginRight: '16px'
                    }} />
                </div>
                <div >{SubjectName}</div>
            </div>
            <FiSearch size={ICON_SIZE} />
        </>
    );
};

export default memo(Header);