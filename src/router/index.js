import Vue from 'vue';
import Router from 'vue-router';
import store from '@/store';

import { commonRoutes, exceptionRoutes, constRoutes } from './routes';

import { hasPermission } from '@/utils/modules/app';

Vue.use(Router);

const router = new Router({
  // need backend support
  // 需要后端支持
  // mode: history,
  routes: constRoutes,
  scrollBehavior() {
    return { x: 0, y: 0 };
  },
});

router.beforeEach((to, from, next) => {
  console.log('to', to);
  Vue.prototype.$progress.start();
  console.log('getter token', store.getters['auth/token']);
  if (store.getters['auth/token']) {
    console.log('in1');
    // has token =>
    if (commonRoutes.indexOf(to.path) !== -1) {
      // going to common routes => go to dashboard page
      // 准备前往 common routes => 跳转到 dashboard 页
      next({ path: '/dashboard' });
    } else if (exceptionRoutes.indexOf(to.path) !== -1) {
      next();
    } else if (store.getters['user/role'] === -1) {
      // check if finish pulling user info
      // not finished => get user info and add routes
      // 检测是否完成拉取用户信息
      // 未完成 => 拉取用户信息并添加路由
      store.dispatch('user/getInfo')
        .then((res) => {
          if (res.success) {
            const { role } = res;
            // genereate and add routes
            // 生成并添加路由
            store.commit('app/generateRoutes', role);
            router.addRoutes(store.getters['app/routesNeedAdd']);
            console.log('routes', router);
            // make sure addRoutes finished
            // 确认 addRoutes 完成
            next({ ...to, replace: true });
          } else {
            Vue.prototype.$alert(`${res.message}`);
          }
        });
    } else if (hasPermission(store.getters['user/role'], to.meta)) {
      // finished =>
      // if has permission => ok
      // 用户信息拉取完成
      // 如果有权限 => 跳转
      next();
    } else {
      // else => go to 401 page
      // 如果没有权限 => 跳转到 401 页
      next({ path: '/401', replace: true, query: { noGoBack: true } });
    }
  } else if (commonRoutes.indexOf(to.path) !== -1 || exceptionRoutes.indexOf(to.path) !== -1) {
    console.log('in2');
    // no token & to const routes
    // 没有 token，前往 const route
    next();
  } else {
    console.log('in3');
    // no token & not to const routes
    // 没有 token，前往非 const route => 跳转到 signin 页，保留前往记录
    next(`/signin?redirect=${to.path}`);
  }
});

router.afterEach(() => {
  Vue.prototype.$progress.done();
});

export default router;
