import axios from "axios";
import { AxiosClient } from "../Axios/AxiosCLient";
import { BACKEND_URLS, FRONTEND_URLS } from "../Routes/Routes";

export function UserData(navigate) {
  axios
    .post(
      BACKEND_URLS.USER_DATA,

      { switch_target_subcourse_id: 0, switch_phase_id: 0, app_version: "web" },
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + localStorage.getItem('access'),
        },
      }
    )
    .then((response) => {
      localStorage.setItem("user", JSON.stringify(response.data.data));
      navigate(FRONTEND_URLS.HOME_ROUTE);
    })
    .catch((error) => {
      console.log("under the userdata error", error);
    });
}

export function formatString(inputString) {

  let formattedString;

  if (inputString == '/') {
    return 'Home'
  }

  else if (inputString.startsWith('/')) {
    formattedString = inputString.slice(1).split('-');
  }
  
  formattedString = formattedString.map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
  
  return formattedString;
}

export function SecToTimeConverter(sec){
  if(sec == undefined){
    return '00:00'
  }
  if (sec < 0) {
    throw new Error("Input must be a non-negative number.");
  }

  const hours = Math.floor(sec / 3600) < 10 ? `0${Math.floor(sec / 3600)}`: Math.floor(sec / 3600);
  const minutes = Math.floor((sec % 3600) / 60) < 10 ? `0${Math.floor((sec % 3600) / 60)}` : Math.floor((sec % 3600) / 60);
  const seconds = (sec % 60) < 10 ? `0${(sec % 60)}` : (sec % 60);

  return (hours > 0) ? `${hours}:${minutes}:${seconds}` : `${minutes}:${seconds}`;
}