export default {
  name: 'nested',
  path: '/nested',
  redirect: { name: 'nestedIndex' },
  component: () => import('@/views/layout/index'),
  meta: {
    defaultOpen: true,
    icon: 'toc',
    title: 'nested',
  },
  children: [
    {
      name: 'nestedIndex',
      path: 'index',
      component: () => import('@/views/nested/index'),
      meta: {
        icon: 'toc',
        title: 'nestedIndex',
      },
    },
    {
      name: 'nestedTest',
      path: 'test',
      redirect: { name: 'nestedTestIndex1' },
      component: () => import('@/views/nested/test'),
      meta: {
        icon: 'toc',
        title: 'nestedTest',
      },
      children: [
        {
          name: 'nestedTestIndex1',
          path: 'index1',
          component: () => import('@/views/nested/testIndex1'),
          meta: {
            title: 'nestedTestIndex1',
          },
        },
        {
          name: 'nestedTestIndex2',
          path: 'index2',
          component: () => import('@/views/nested/testIndex2'),
          meta: {
            title: 'nestedTestIndex2',
          },
        },
      ],
    },
  ],
};
