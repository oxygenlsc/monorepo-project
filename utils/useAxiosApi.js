/* eslint-disable @typescript-eslint/no-explicit-any */
import axios from "axios";
// import { showToast } from '@nutui/nutui'
const BASE_URL = import.meta.env.VITE_APP_BASE_URL;
console.log(BASE_URL, "BASE_URL——axios ");
// create an axios instance
const instance = axios.create({
  baseURL: BASE_URL,
  withCredentials: false,
  timeout: 10000,
});

// request interceptor
instance.interceptors.request.use(
  (config) => {
    // do something before request is sent
    // const store = useUserStore()
    // const token = store.token;
    // if (token) {
    //   // let each request carry token
    //   config.headers = {
    //     ...config.headers,
    //     // Authorization: `Bearer ${token}`
    //     token: token
    //   };
    // }
    return config;
  },
  (error) => {
    // do something with request error
    console.log(error); // for debug
    return Promise.reject(error);
  }
);

// response interceptor
instance.interceptors.response.use(
  (response) => {
    const res = response.data;
    if (res.data) {
      return Promise.resolve(res.data);
    } else {
      return Promise.resolve(res);
    }
  },
  (error) => {
    const res = error.response;
    // showToast.fail(res.data.message || 'Error')
    // if (res.data.code === 'C_3') {
    //   console.log('res.code', 'c_3')
    //   window.location.href = `${import.meta.env.VITE_APP_AUTH_URL}/wecom/auth?to=/`
    // } else if (res.data.code === 'CAUTH_1') {
    //   window.location.href = `${import.meta.env.VITE_APP_AUTH_URL}/auth-error?msg=${res.message}`
    // } else {
    //   //
    // }
  }
);

const request = (config, options) => {
  if (typeof config === "string") {
    if (!options) {
      return instance.request({
        url: config,
      });
      // throw new Error('请配置正确的请求参数');
    } else {
      return instance.request({
        url: config,
        ...options,
      });
    }
  } else {
    return instance.request(config);
  }
};
export function get(config, options) {
  return request({ ...config, method: "GET" }, options);
}

export function post(config, options) {
  return request({ ...config, method: "POST" }, options);
}

export default request;
