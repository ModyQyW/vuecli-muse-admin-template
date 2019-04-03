import localStorage from '../LocalStorage';

// language part
// 语言部分
const languageKey = 'language';

/**
 * 获取上一次使用的语言
 * @returns { String }
 */
export function getLanguage() {
  return localStorage.getItem(languageKey);
}

/**
 * 设置语言
 * @param { String } val
 */
export function setLanguage(val) {
  localStorage.setItem(languageKey, val);
}

// drawer part
// drawer 部分
const drawerOpenKey = 'drawerOpen';
const drawerDockedKey = 'drawerDocked';

/**
 * 获取上一次 drawer 开启状态
 * @returns
 */
export function getDrawerOpen() {
  return JSON.parse(localStorage.getItem(drawerOpenKey));
}

export function setDrawerOpen(val) {
  localStorage.setItem(drawerOpenKey, val);
}

export function getDrawerDocked() {
  return JSON.parse(localStorage.getItem(drawerDockedKey));
}

export function setDrawerDocked(val) {
  localStorage.setItem(drawerDockedKey, val);
}

// routes part
// routes 部分
/**
 * 判断能否进入某页面
 * 页面无标示权限级别时，可以进入
 * 当前角色权限不大于页面标示权限级别时，可以进入
 * @param { Number } role
 * @param { Object } routeRole
 * @returns { Boolean }
 */
export function hasPermission(role, meta) {
  if (meta.role === 0 || meta.role) {
    return role <= meta.role;
  }
  return true;
}

/**
 * 递归过滤动态路由表
 * 返回符合角色权限的动态路由表
 * @param { Array<RouteObject> } routes
 * @param { Number } role
 * @returns { Array<RouteObject> }
 */
export function filterMutableRoutes(routes, role) {
  const res = [];
  routes.forEach((route) => {
    const tmp = { ...route };
    if (hasPermission(role, tmp.meta)) {
      if (tmp.children) {
        tmp.children = filterMutableRoutes(tmp.children, role);
      }
      res.push(tmp);
    }
  });
  return res;
}
