import axios from 'axios';
import {API} from "./constants";
import Vue from 'vue'
import auth from '../services/auth'

axios.defaults.baseURL = API;
axios.interceptors.response.use(
    data => {
        return data
    },
    error => {
        if (error.response && error.response.status === 401) {
            auth.logout()
        }
        let errorMessage;
        if (typeof error.response.data.message === 'string') {
            errorMessage = error.response.data.message
        } else {
            errorMessage = error.response.data.message || error.message
        }
        Vue.prototype.$notify({
            title: errorMessage,
            type: 'error'
        });
        return Promise.reject(error.response.data.message || error.message)
    }
);

export default axios
