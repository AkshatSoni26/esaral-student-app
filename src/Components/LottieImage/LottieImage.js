import React from "react";
import Lottie from "lottie-react";

/**
 * 
 * @animationData It is data of the animation which is required
 * @loop It is boolean value which is by default is set to true
 * @returns 
 */
const LottieImage = ({animationData, Isloop=true}) => <Lottie animationData={animationData} loop={Isloop} />;

export default LottieImage;