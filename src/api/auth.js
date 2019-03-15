import Vue from 'vue';

const { $request: request } = Vue.prototype;

/**
 * sign in
 * 登录
 * @export
 * @param { Object { username, password } } data
 * @returns Promise<Object>
 */
export function signin(data) {
  return request.post('/auth/signin', data);
}

/**
 * sign up
 * 注册
 * @export
 * @param { Object { username, password } } data
 * @returns Promise<Object>
 */
export function signup(data) {
  return request.post('/auth/signup', data);
}
