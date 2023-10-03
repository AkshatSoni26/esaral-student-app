import React, { memo } from 'react';

const MenuContent = ({data, setIsIndex}) => {
    console.log("MenuContent")
    function srollToView(id) {
        const element = document.getElementById(id);
        element.scrollIntoView({behavior:'smooth'});
    }
    return (
        <div className='Subject-Menu'>
                {
                    (data).map(
                        (chapter, id) => {
                            return (
                                <div key={id} onClick={() => {
                                    srollToView(chapter.node_id)
                                    setIsIndex(true)
                                }} className='Lecture-names common-margin pseudo-button'>
                                    {chapter.display_name}
                                </div>
                            )
                        }
                    )
                }
            </div>
    );
};

export default memo(MenuContent);

MenuContent.defaultProps = {
    setIsIndex: () => {
        console.log("Chapter Button is Clicked.")
    }
}