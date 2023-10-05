import React from 'react';

const SimplePopUp = ({name}) => {
    return (
        <div className='PopUp-Contanier'>
            <div className='PopUp-modal'>

                <div className='Pop-Box-Second-Contanier'>
                    <div>
                        Your Updated Name is: <span className='PopUp-Input-Field-label'>{name}</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SimplePopUp;