export default {
  path: '/table',
  component: () => import('@/views/layout/index'),
  meta: {
    icon: 'table_chart',
    title: 'table',
  },
  children: [
    {
      name: 'table',
      path: '',
      component: () => import('@/views/table/index'),
      meta: {
        title: 'table',
      },
    },
  ],
};
