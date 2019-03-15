export default {
  // dashboard
  // 仪表板
  path: '/dashboard',
  component: () => import('@/views/layout/index'),
  meta: {
    icon: 'dashboard',
    title: 'dashboard',
  },
  children: [
    {
      name: 'dashboard',
      path: '',
      component: () => import('@/views/dashboard/index'),
      meta: {
        title: 'dashboard',
      },
    },
  ],
};
