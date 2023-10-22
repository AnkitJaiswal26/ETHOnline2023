import axios from "axios";
import { baseUrl } from "../urlConfig";

const axiosInstance = axios.create({
  baseURL: baseUrl,
  withCredentials: false,
        headers: {
          'Access-Control-Allow-Origin' : '*',
          'Access-Control-Allow-Methods':'GET,PUT,POST,DELETE,PATCH,OPTIONS',   
      }
});

export default axiosInstance;
