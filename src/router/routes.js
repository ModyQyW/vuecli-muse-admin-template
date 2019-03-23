import dashboard from './modules/dashboard';
import nested from './modules/nested';
import clipboard from './modules/clipboard';
import zip from './modules/zip';
import editor from './modules/editor';
import draggable from './modules/draggable';
import table from './modules/table';
import icons from './modules/icons';
import customScatterChart from './modules/customScatterChart';

/*
 * Attention: the route must redirect to its child if it has children.
 * Please check ./modules/dashboard.js and ./modules/nested.js
 * 注意: 假如路由有 children 字段, 必须重定向到其 child
 * 请参考 ./modules/dashboard.js 和 ./modules/nested.js
 *
 * meta: {
 *   cached: <Boolean>, keep alive or not, default false,
 *   defaultOpen: <Boolean>, default open or not if nested, default false,
 *   hidden: <Boolean>, not show in drawer or not, default false,
 *   icon: <String>, meterial design icon name, default showing nothing,
 *                   no need to set if show in drawer or need no icon
 *   role: <Number>, minimal role for accessing the route, default all roles,
 *   title: <String>, the name show in drawer, will be localized,
 *                    if not set, use the title of the first child
 * }
 *
 * meta: {
 *   cached: <Boolean>, 是否保持组件状态, 默认为否,
 *   defaultOpen: <Boolean>, 存在嵌套项时是否默认展开, 默认为折叠,
 *   hidden: <Boolean>, 是否不在抽屉导航中显示, 默认为否，
 *   icon: <String>, meterial design 图标名称, 默认不显示图标,
 *                   如果不在抽屉导航中显示或不需要图标, 不用设置,
 *   role: <Number>, 路由允许进入的最低角色, 默认所有角色均能进入,
 *   title: <String>, 显示在抽屉导航中的名称, 会进行国际化,
 *                    如果没有设置, 会使用第一个 child 的 title
 * }
 */

// routes dont need token
// 不需要 token 的 routes
export const commonRoutes = [
  '/',
  '/signin',
];

export const exceptionRoutes = [
  '/401', '/403', '/404', '/500',
];

// routes every role has
// 每个角色都能访问的 routes
export const constRoutes = [
  {
    path: '/',
    redirect: '/signin',
    meta: {
      hidden: true,
    },
  },
  {
    name: 'signin',
    path: '/signin',
    component: () => import('@/views/signin/index'),
    // component: () => import('@/views/layout/index'),
    meta: {
      hidden: true,
    },
  },
  {
    name: '401',
    path: '/401',
    component: () => import('@/views/exception/401'),
    meta: {
      hidden: true,
    },
  },
  {
    name: '403',
    path: '/403',
    component: () => import('@/views/exception/403'),
    meta: {
      hidden: true,
    },
  },
  {
    name: '404',
    path: '/404',
    component: () => import('@/views/exception/404'),
    meta: {
      hidden: true,
    },
  },
  {
    name: '500',
    path: '/500',
    component: () => import('@/views/exception/500'),
    meta: {
      hidden: true,
    },
  },
];

// routes for special role
// 特定角色才能访问的 routes
export const mutableRoutes = [
  // dashboard
  // 仪表板
  dashboard,
  // nested routes
  // 嵌套路由
  nested,
  // clipboard
  // 剪切板
  clipboard,
  // zip
  zip,
  // editor
  // 编辑器
  editor,
  // draggable
  // 拖拽
  draggable,
  // table
  // 表格
  table,
  // icons
  // 图标
  icons,
  // custom scatter chart
  // 自定义散点图
  customScatterChart,
  // 404
  {
    path: '*',
    redirect: { name: '404' },
    meta: {
      hidden: true,
    },
  },
];
