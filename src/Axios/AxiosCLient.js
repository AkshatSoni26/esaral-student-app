import axios from "axios";
import { BASE } from "../Routes/Routes";

const AxiosClient = axios.create({ baseURL: BASE });

// Function to set the Authorization header
const setAuthorizationHeader = (config) => {
  const accessToken = localStorage.getItem("access");
  if (accessToken) {
    config.headers.Authorization = `Bearer ${accessToken}`;
  }
  return config;
};

AxiosClient.interceptors.request.use(
  // Add the Authorization header before making the request
  setAuthorizationHeader,
  (error) => {
    // Handle request errors
    return Promise.reject(error);
  }
);

AxiosClient.interceptors.response.use(
  (response) => {
    // Successful response
    return response;
  },
  (error) => {
    if (error.response && error.response.status === 401) {
      // Unauthorized error, handle it here
      alert("Unauthorized: Redirect to login page.");
      window.location.reload(true);
    } else {
      // Handle other response errors
      // console.error("Request error:", error);
      alert(error.message)
    }
    // return Promise.reject(error);
  }
);

export { AxiosClient };
