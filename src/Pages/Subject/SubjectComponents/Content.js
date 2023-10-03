import React, { memo } from 'react';
import { BsChevronRight } from 'react-icons/bs';
import { DefaultImage } from '../../../Components/Services';
import LetureComp from './LetureComp';

const Content = ({ data }) => {
    console.log("Content")

    function NavigaterFun() {
        console.log("NavigaterFun")
    }

    return (
        <div className='Content '>
            {
                (data).map(
                    (chapter, id) => {
                        return (
                            <div key={id} id={chapter.node_id} className='Home-content' style={{
                                marginTop: "10px",
                                marginBottom: "10px",
                                display: "flex",
                                flexDirection: 'column',

                            }}>

                                <div style={{
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "space-between",
                                    height: "48px",
                                }} className='common-margin '>
                                    <div className='pseudo-button' onClick={() => {
                                        NavigaterFun()
                                    }}>
                                        <div className='Chapter-Name '>{chapter.display_name}</div>
                                        <div className='Subject-subtitle'> Lectures: {(chapter.content.learn).length} </div>
                                    </div>
                                    <BsChevronRight onClick={() => {
                                        NavigaterFun()
                                    }} size={24} className='pseudo-button' />
                                </div>

                                <div style={{
                                    display: "flex",
                                    overflowX: 'auto',
                                }}  >
                                    {

                                        (chapter.content.learn).map(
                                            (chapter, key) => {
                                                return (
                                                    <LetureComp key={key} id={key} node_id={chapter.node_id} display_name={chapter.display_name} duration={chapter.content_data.content_info?.duration} image={chapter.content_data.content_info?.thumbnail ?? DefaultImage} />
                                                )
                                            }
                                        )
                                    }
                                </div>
                            </div>
                        )
                    }
                )
            }
        </div>
    );
};

export default memo(Content);