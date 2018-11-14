import axios from 'axios';
import { Toast } from "antd-mobile";

axios.interceptors.request.use(
    config => {
        Toast.loading('页面加载中...', 0);
        return config;
    },
    error => {
        Toast.hide();
        return error;
    }
)

axios.interceptors.response.use(
    res => {
        Toast.hide();
        return res;
    },
    error => {
        Toast.hide();
        return error;
    }
)