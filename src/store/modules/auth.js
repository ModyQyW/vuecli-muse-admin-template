import { signin, signup } from '@/api/auth';
import { getToken, setToken, removeToken } from '@/utils/modules/auth';

const auth = {
  namespaced: true,
  state: {
    token: getToken() || '',
  },
  getters: {
    token: state => state.token,
  },
  mutations: {
    setToken(state, token) {
      Object.assign(state, { token });
      setToken(token);
    },
    removeToken(state) {
      Object.assign(state, { token: '' });
      removeToken();
    },
  },
  actions: {
    signin({ commit }, obj) {
      return signin(obj)
        .then((res) => {
          if (res.success) {
            commit('setToken', res.token);
          }
          return res;
        });
    },
    signup(context, obj) {
      return signup(obj);
    },
  },
};

export default auth;
