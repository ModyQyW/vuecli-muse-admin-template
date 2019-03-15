export default {
  path: '/icons',
  component: () => import('@/views/layout/index'),
  meta: {
    icon: 'image',
    title: 'icons',
  },
  children: [
    {
      name: 'icons',
      path: '',
      component: () => import('@/views/icons/index'),
      meta: {
        title: 'icons',
      },
    },
  ],
};
