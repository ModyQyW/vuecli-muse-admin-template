// import localStorage from '../LocalStorage';
import sessionStorage from '../SessionStorage';

// token part
// token 部分
const tokenKey = 'token';

export function getToken() {
  return sessionStorage.getItem(tokenKey);
}

export function setToken(val) {
  sessionStorage.setItem(tokenKey, val);
}

export function removeToken() {
  sessionStorage.removeItem(tokenKey);
}
