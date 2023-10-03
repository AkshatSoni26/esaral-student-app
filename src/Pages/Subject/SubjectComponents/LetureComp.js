import React, { memo } from 'react';
import { PlayButton } from '../../../Components/Services';
import { SecToTimeConverter } from '../../../Functions/Functions';

const LetureComp = ({ image, id, display_name, node_id, duration }) => {
    console.log("LetureComp")

    function NavigaterFun() {
        console.log("NavigaterFun")
    }

    return (
        <div id={node_id} className='pseudo-button' style={{
            margin: `10px 10px 10px ${id == 0 ? "20px" : "0px"}`, position: 'relative'
        }} onClick={() => {
            NavigaterFun()
        }}>
            <div className='Subject-img' style={{
                position: 'absolute',
                width: '200px',
                height: '100px',
                display: "flex",
                alignItems: "flex-end",
                justifyContent: "flex-end",
                zIndex:1,
            }}>
                <div className='Subject-img-time-box' >
                    <div className='Subject-img-time'>{SecToTimeConverter(duration)}</div>
                </div>
            </div>
            <div className='Subject-img' style={{
                position: 'absolute',
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
            }}>
                <img src={PlayButton} style={{
                    width: "30px",
                }} />
            </div>
            <img className='Subject-img' src={image} loading='lazy'/>
            <div className='Lecture-name'>{display_name}</div>
        </div>
    );
};

export default memo(LetureComp);