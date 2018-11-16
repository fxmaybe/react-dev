import axios from 'axios';
import { Toast } from "antd-mobile";

axios.interceptors.request.use(
    config => {
        return config;
    },
    error => {
        return error;
    }
)

axios.interceptors.response.use(
    res => {
        return res;
    },
    error => {
        return error;
    }
)