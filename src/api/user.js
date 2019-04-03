import Vue from 'vue';

// if @/plugins/axios/index.js imports store before set Vue.prototype.$request
// when exec the line 6, we get undefined
// TypeError: Cannot read property 'post' of undefined
const { $request: request } = Vue.prototype;

// add more function and remove eslint-disable

/* eslint-disable */
export function getInfo() {
  return request.post('/user/info');
}
/* eslint-enable */
