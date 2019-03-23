export default {
  // customScatterChart
  // 自定义散点图
  path: '/customScatterChart',
  component: () => import('@/views/layout/index'),
  meta: {
    icon: 'bubble_chart',
    title: 'customScatterChart',
  },
  children: [
    {
      name: 'customScatterChart',
      path: '',
      component: () => import('@/views/customScatterChart/index'),
      meta: {
        title: 'customScatterChart',
      },
    },
  ],
};
