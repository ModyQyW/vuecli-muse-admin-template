import { getInfo } from '@/api/user';
// import {  } from '@/utils/modules/user';

const user = {
  namespaced: true,
  state: {
    id: -1,
    name: '',
    email: '',
    avatar: '',
    role: -1,
  },
  getters: {
    id: state => state.id,
    name: state => state.name,
    avatar: state => state.avatar,
    email: state => state.email,
    role: state => state.role,
  },
  mutations: {
    setId(state, id) {
      Object.assign(state, { id });
    },
    setName(state, name) {
      Object.assign(state, { name });
    },
    setAvatar(state, avatar) {
      Object.assign(state, { avatar });
    },
    setEmail(state, email) {
      Object.assign(state, { email });
    },
    setRole(state, role) {
      Object.assign(state, { role });
    },
    setInfo(state, info) {
      Object.assign(state, info);
    },
    clearInfo(state) {
      Object.assign(state, {
        id: -1,
        name: '',
        avatar: '',
        email: '',
        role: -1,
      });
    },
  },
  actions: {
    getInfo({ commit }) {
      return getInfo()
        .then((res) => {
          if (res.success) {
            commit('setId', res.id);
            commit('setName', res.name);
            commit('setAvatar', res.avatar);
            commit('setEmail', res.email);
            commit('setRole', res.role);
          }
          return res;
        });
    },
  },
};

export default user;
