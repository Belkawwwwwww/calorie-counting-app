import axios from "axios";

const ax = axios.create({
    baseURL: 'http://92.118.114.163:5001/',
    timeout: 360 * 1000,
    withCredentials: true,
})
ax.interceptors.request.use(
    function (config) {
        //console.log('🚀 ~ file: index.ts:11 ~ config:', config);
        return config;
    },
    function (error) {
        return Promise.reject(error);
    },
);

ax.interceptors.response.use(
    function (response) {
        //console.log('🚀 ~ file: index.ts:21 ~ response:', response);
        return response;
    },
    function (error) {
        return Promise.reject(error);
    },
);

export default ax;
