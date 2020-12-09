import axios from 'axios';

let instance = axios.create({
    baseURL: 'https://waterfire.yuxianginfo.net',//https://idospower.yuxianginfo.net   https://waterfire.yuxianginfo.net
    timeout: 200000,
    withCredentials: false,
});

// console.log(process.env.NODE_ENV,process.env.BASE_URL);

// 添加请求拦截器
instance.interceptors.request.use((config) => {

    config.headers['Accept'] = '*/*';
    
    config.headers['Content-Type'] = 'application/x-www-form-urlencoded';// 请求头，发送FormData格式的数据，必须是 这种请求头。

    return config;

}, (error) => {

    // 对请求错误做些什么
    return Promise.reject(error);
    
});

// 添加响应拦截器
instance.interceptors.response.use((response) => {

    // 对响应数据做点什么
    response.headers['access'] = '*';
    
    return response;

}, (error) => {
    //  对响应错误做点什么
    return Promise.reject(error);
});

export default instance;
