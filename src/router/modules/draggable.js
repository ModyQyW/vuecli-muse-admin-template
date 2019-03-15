export default {
  path: '/draggable',
  component: () => import('@/views/layout/index'),
  meta: {
    icon: 'drag_handle',
    title: 'draggable',
  },
  children: [
    {
      name: 'draggable',
      path: '',
      component: () => import('@/views/draggable/index'),
      meta: {
        title: 'draggable',
      },
    },
  ],
};
