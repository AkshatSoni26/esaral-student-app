import React, { useEffect, useRef, useState } from 'react';
import { BACKEND_URLS, FRONTEND_URLS } from '../../../Routes/Routes';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import PhoneNumber from './PhoneNumber';
import OTPGenrator from './OTPGenrator';
import { country_code } from '../../../Components/Services';
import { AxiosClient } from '../../../Axios/AxiosCLient';
import { UserData } from '../../../Functions/Functions';


const Verifie = () => {
  console.log("Verifie")

  const PhoneRef = useRef()
  const navigate = useNavigate()
  const [warn, setWarn] = useState(false)
  const [otp, setOtp] = useState(false)
  const [OTP, setOTP] = useState('')
  const [number, setNumber] = useState('')
  const [nonce, setNonce] = useState('')



  function OTPSender(phoneNumber) {
    const format = /[0-9]/;

    if (format.test(phoneNumber) && phoneNumber.length == 10) {
      axios.post(BACKEND_URLS.OTP_SENDER, {
        country_code: country_code,
        phone_number: phoneNumber,
      })
        .then((response) => {
          if (response.data.status === 0) {
            // console.log('Response', response)
            setNumber(PhoneRef.current.value)
            setOtp(true)
            setWarn(false)
            setNonce(response.data.data.nonce)
          }
        })
        .catch((error) => {
          console.log(error.message);
        });
    }

    else {
      setWarn(true)

      const CounCodeBox = document.getElementById("country_code");
      CounCodeBox.style.border = "2px solid red";
      CounCodeBox.style.borderRight = '0px'

      const numberBox = document.getElementById("PhoneInput");
      numberBox.style.border = "2px solid red";
      numberBox.style.borderLeft = '0px'

      numberBox.focus()
    }

  }

  function verifiOTP() {

    const format = /^\d+$/

    if (format.test(OTP) && OTP.length == 4) {
      axios
        .put(BACKEND_URLS.OTP_SENDER, {
          country_code: country_code,
          phone_number: number,
          nonce: nonce,
          otp: OTP,
        })
        .then((response) => {
          if (response.data.status !== 0) {
            setWarn(true)
            const OtpBoxes = document.getElementsByClassName('Otp_Box');
            for (let i = 0; i < OtpBoxes.length; i++) {
              OtpBoxes[i].style.border = "2px solid red";
            }
          }
          else if (response.data.status == 0) {
            setNonce(response.data.data.nonce)
            UserDataProvider()
          }
        })
        .catch((error) => {
          console.log("under the verifiOTP", error);
        });
    }
    else {
      setWarn(true)
      const OtpBoxes = document.getElementsByClassName('Otp_Box');
      for (let i = 0; i < OtpBoxes.length; i++) {
        OtpBoxes[i].style.border = "2px solid red";
      }
    }
  }

  function UserDataProvider() {
    axios
      .post(BACKEND_URLS.USER_DATA_PROVIDER, {
        country_code: country_code,
        phone_number: number,
        nonce: nonce,
        widevine: "",
        widevine_level: "",
        imei: "",
        id_organization: "1",
        firebase_notification_token:
          "f5aoEZM9Tu6gdd7lEMy58p:APA91bHSt0cBMyb875QZ2SpNl9rnMZOo3rRjWWEIq-J0dtr7khAuNV3BG6ea4wUsVGPO4kuNgwWVhGF2gz99Fm2dk5kgmgcbKKW4XPah6UHHRkaKlxEvgI49rvTmkMxj7uzeKOsXAcri",
        device_name: "Xiaomi",
        os: "Redmi K20 Pro",
        os_version: 30,
      })
      .then((response) => {
        const access = response.data.data.tokens.access;
        const is_course_assigned = response.data.data.is_course_assigned;
        localStorage.setItem('access', access)

        if (is_course_assigned !== false) {
          navigate(FRONTEND_URLS.REGISTER_ROUTE + '/name')
        }
        else {
          UserData(navigate);
        }
      })
      .catch((error) => {
        console.log("under the user data function error", error);
      });
  }


  useEffect(
    () => {
      if ((OTP.length == 4)) {
        verifiOTP()
      }
    }, [OTP]
  )



  return (
    <div className='Form'>
      {
        !otp ?
          <PhoneNumber PhoneRef={PhoneRef} OTPSender={OTPSender} warn={warn} />
          :
          <OTPGenrator setOtp={setOtp} setOTP={setOTP} warn={warn} OTP={OTP} number={number} setWarn={setWarn} />
      }
    </div>
  );
};

export default Verifie;