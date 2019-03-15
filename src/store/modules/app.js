// not save usage habits
// 不保存使用习惯

import i18n from '@/plugins/locales/index';
import appTheme from 'muse-ui/lib/theme';
// import {  } from '@/api/app';
import {
  // getDrawerOpen,
  // setDrawerOpen,
  // getDrawerDocked,
  // setDrawerDocked,
  // getLanguage,
  // setLanguage,
  filterMutableRoutes,
} from '@/utils/modules/app';
import { constRoutes, mutableRoutes } from '@/router/routes';

const app = {
  namespaced: true,
  state: {
    mobile: false,
    // drawerOpen: getDrawerOpen() || true,
    drawerOpen: true,
    // drawerDocked: getDrawerDocked() || true,
    drawerDocked: true,
    // language: getLanguage() || 'zh-CN',
    theme: 'light',
    language: 'zh-CN',
    routes: [],
    routesNeedAdd: [],
  },
  getters: {
    mobile: state => state.mobile,
    drawerOpen: state => state.drawerOpen,
    drawerDocked: state => state.drawerDocked,
    theme: state => state.theme,
    language: state => state.language,
    routes: state => state.routes,
    routesNeedAdd: state => state.routesNeedAdd,
  },
  mutations: {
    setMobile(state, mobile) {
      Object.assign(state, { mobile });
      // setMobile(mobile);
    },
    setDrawerOpen(state, drawerOpen) {
      Object.assign(state, { drawerOpen });
      // setDrawerOpen(drawerOpen);
    },
    setDrawerDocked(state, drawerDocked) {
      Object.assign(state, { drawerDocked });
      // setDrawerOpen(drawerDocked);
    },
    setTheme(state, theme) {
      Object.assign(state, { theme });
      appTheme.use(theme);
    },
    setLanguage(state, language) {
      Object.assign(state, { language });
      i18n.locale = language;
      // setLanguage(language);
    },
    setRoutes(state, routes) {
      Object.assign(state, { routes });
    },
    setRoutesNeedAdd(state, routesNeedAdd) {
      Object.assign(state, { routesNeedAdd });
    },
    generateRoutes(state, role) {
      let tmpRoutes;
      if (role === 0) {
        tmpRoutes = mutableRoutes;
      } else {
        tmpRoutes = filterMutableRoutes(mutableRoutes, role);
      }
      this.commit('app/setRoutes', constRoutes.concat(tmpRoutes));
      this.commit('app/setRoutesNeedAdd', tmpRoutes);
    },
  },
  actions: {
  },
};

export default app;
