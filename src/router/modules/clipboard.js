export default {
  path: '/clipboard',
  component: () => import('@/views/layout/index'),
  meta: {
    icon: 'file_copy',
    title: 'clipboard',
  },
  children: [
    {
      name: 'clipboard',
      path: '',
      component: () => import('@/views/clipboard/index'),
      meta: {
        title: 'clipboard',
      },
    },
  ],
};
