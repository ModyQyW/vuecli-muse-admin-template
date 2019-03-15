export default {
  path: '/zip',
  component: () => import('@/views/layout/index'),
  meta: {
    icon: 'folder',
    title: 'zip',
  },
  children: [
    {
      name: 'zip',
      path: '',
      component: () => import('@/views/zip/index'),
      meta: {
        title: 'zip',
      },
    },
  ],
};
