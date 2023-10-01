import axios from "axios";
import { BASE } from "../Routes/Routes";

const AxiosClient = axios.create({baseURL : BASE });

const access =  localStorage.getItem("access");

AxiosClient.interceptors.request.use(function(config){
    if (access) {
        config.headers.Authorization = "Bearer " + access
    }
    return config;
});


export { AxiosClient };
