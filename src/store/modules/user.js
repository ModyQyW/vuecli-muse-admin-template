import { getInfo } from '@/api/user';
// import {  } from '@/utils/modules/user';

const user = {
  namespaced: true,
  state: {
    id: '',
    name: '',
    email: '',
    avatar: '',
    role: -1,
    // for further use
    // 留待后续使用
    // code: '',
    // status: '',
    // introduction: '',
  },
  getters: {
    id: state => state.id,
    name: state => state.name,
    email: state => state.email,
    avatar: state => state.avatar,
    role: state => state.role,
    // code: state => state.code,
    // status: state => state.status,
    // introduction: state => state.introduction,
  },
  mutations: {
    setId(state, id) {
      Object.assign(state, { id });
    },
    setName(state, name) {
      Object.assign(state, { name });
    },
    setEmail(state, email) {
      Object.assign(state, { email });
    },
    setAvatar(state, avatar) {
      Object.assign(state, { avatar });
    },
    setRole(state, role) {
      Object.assign(state, { role });
    },
    // setCode(state, code) {
    //   Object.assign(state, { code });
    // },
    // setStatus(state, status) {
    //   Object.assign(state, { status });
    // },
    // setIntroduction(state, introduction) {
    //   Object.assign(state, { introduction });
    // },
    setInfo(state, info) {
      Object.assign(state, info);
    },
    clearInfo(state) {
      Object.assign(state, {
        id: '',
        name: '',
        email: '',
        avatar: '',
        role: -1,
        // code: '',
        // status: '',
        // introduction: '',
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
            commit('setEmail', res.email);
            commit('setAvatar', res.avatar);
            commit('setRole', res.role);
            // commit('setCode', res.code);
            // commit('setStatus', res.status);
            // commit('setIntroduction', res.introduction);
          }
          return res;
        });
    },
  },
};

export default user;
