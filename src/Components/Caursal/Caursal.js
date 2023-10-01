import React, { useEffect } from 'react';
import './Caursal.css'

/**
 * This is the Caursal with effect of feading.

 * @param imgList takes a image list.
 * @param timeInterval it is the timeInterval when the second image come and by difault values of this time interval is 5 seconds.
 * 
 */


const Caursal = ({ imgList, timeInterval }) => {
    console.log("Caursal")

    let activeIndex = 0

    useEffect(
        () => {

            const interval = setInterval(
                () => {

                    if (activeIndex < imgList.length - 1) {
                        document.getElementById(activeIndex + 1).scrollIntoView({ behavior: "smooth" });
                        activeIndex++
                    } else {
                        document.getElementById(0).scrollIntoView({ behavior: "smooth" });
                        activeIndex = 0
                    }

                }, [timeInterval * 1000]
            )

            return () => clearInterval(interval);

        }, []
    )


    return (

        <div className='Caursal' style={{
            display: 'flex', overflowX: "hidden"
        }}
        >
            {
                imgList.map(
                    (img, ind) => {

                        return (
                            <div key={ind} className='' >
                                <div id={ind} className='caursal-main'>
                                    <div>
                                        <img className='caursal-anim'
                                            src={img.url}
                                            style={{ height: "50%", width: "50%", }}
                                            alt={`Carousel Image ${activeIndex}`}
                                            loading="lazy"
                                        />
                                        <div className='caursal-heading-layout'>
                                            <div className='Form-heading1'>{img.heading}</div>
                                            <div className='Form-heading2'>{img.text}</div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        )

                    }
                )
            }


        </div>
    );
};

export default Caursal;


Caursal.defaultProps = {
    timeInterval: 5,
}