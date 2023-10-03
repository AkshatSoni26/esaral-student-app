import React from 'react';

const FaculityCarusal = ({faculties}) => {
    // const faculties = JSON.parse(localStorage.getItem('user'))?.faculties
    return (
        <div style={{
                display: "flex",
                flexDirection: "row",
                overflow: 'auto',
                marginTop:'20px',
        }} className='Content-Scroll'>
            {
             faculties &&   faculties.map(
                    (facultie, id) => {
                        return (
                            <div key={id} style={{
                                marginRight: "10%", marginLeft: `${id == 0 ? "20px" : ''}`,
                            }}>
                                <img className='Faculity-img' src={facultie.thumbnail} />
                                <div className='Home-Name'>{facultie.name}</div>
                                <div className='Home-Name-subtitle'>{(facultie.designation.charAt(0).toUpperCase() + facultie.designation.slice(1).toLowerCase())}</div>
                            </div>
                        )
                    }
                )
            }
        </div>
    );
};

export default FaculityCarusal;