import Vue from 'vue';
import axios from 'axios';
import { getToken } from '@/utils/modules/auth';

// dev environment api url
// 测试环境接口 Url，实则会被 mock.js 拦截
const devUrl = 'https://easy-mock.com/mock/5c75087a6ce4da08919aede1/vuecli-muse-admin-template';
// prod environment api url
// 生产环境接口 Url
const prodUrl = '';
const baseUrl = process.env.NODE_ENV === 'development' ? devUrl : prodUrl;

// base url
// 接口 url 前缀
axios.defaults.baseURL = baseUrl;
// timeout setting
// 超时设置
axios.defaults.timeout = 3000;
// take cookie or not
// 是否携带 cookie
axios.defaults.withCredentials = false;
// headers
axios.defaults.headers = {
  'X-Requested-With': 'XMLHttpRequest',
  'Content-Type': 'application/json',
  Accept: 'application/json',
};
// 验证响应状态
// validate response status
axios.defaults.validateStatus = status => (status >= 200 && status < 300) || status === 304;
// max length of the content
// 内容最大字节
axios.defaults.maxContentLength = 524288; // 0.5 MB
// max redirect times
// 最大重定向次数
axios.defaults.maxRedirects = 5;
// request interceptor
// 请求拦截器
axios.interceptors.request.use(
  (config) => {
    const token = getToken();
    if (token) {
      Object.assign(config.headers, { token });
    }
    return config;
  },
);
// response interceptor
// 响应拦截器
axios.interceptors.response.use(
  // (response) => { console.log('response', response); return response.data; },
  response => response.data,
  (error) => {
    const err = {
      success: false,
      message: '',
    };
    console.log(error.config);
    if (error.response) {
      // The request was made and the server responded with a status code
      // that falls out of the range of [200, 300) ∪ 304
      // 发送了请求，响应超出范围
      console.log(error.response.data);
      console.log(error.response.status);
      console.log(error.response.headers);
      err.message = 'badStatusCode';
    } else if (error.request) {
      // The request was made but no response was received
      // 发送了请求，没有收到响应
      console.log(error.request);
      err.message = 'noResponse';
    } else {
      // Something happened in setting up the request that triggered an Error
      // 请求时发生错误
      console.log('Error', error.message);
      err.message = 'requestError';
    }
    return err;
  },
);

// link axios to prototype
// 链接 axios 到原型
Vue.prototype.$axios = axios;

// package axios then link to prototype
// Loading should open manually when click corresponding buttons / modify corresponding params / ...
//         should close manually after getting corresponding data from response
// 封装 axios 并链接到原型
// Loading 应当在 点击对应按钮/修改对应参数/... 时手动打开
//         应当在 获取响应中相关数据 后手动关闭
Vue.prototype.$request = {
  get(url, params) {
    return axios({
      method: 'get',
      url,
      params,
    });
  },
  post(url, data) {
    return axios({
      method: 'post',
      url,
      data,
    });
  },
  upload(url, data) {
    return axios({
      method: 'post',
      headers: {
        'X-Requested-With': 'XMLHttpRequest',
        'Content-Type': 'multipart/form-data',
        Accept: 'application/json',
      },
      url,
      data,
    });
  },
};
