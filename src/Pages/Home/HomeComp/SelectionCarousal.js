import React from 'react';

const SelectionCarousal = ({selections}) => {
    return (
        <div className='Content-Scroll' style={{
            marginTop:'20px',
        }}>
            {
               selections.map(
                    (selection, id) => {
                        return(
                            <img key={id} style={{
                                marginLeft: `${id == 0 ? "20px" : ''}`
                            }} className='SelectionCarousal' src={selection.thumbnail} />
                        )
                    }
                )
            }
        </div>
    );
};

export default SelectionCarousal;