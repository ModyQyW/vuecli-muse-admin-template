export default {
  name: 'editor',
  path: '/editor',
  redirect: { name: 'jsonEditor' },
  component: () => import('@/views/layout/index'),
  meta: {
    defaultOpen: true,
    icon: 'edit',
    title: 'editor',
  },
  children: [
    {
      name: 'jsonEditor',
      path: 'jsonEditor',
      component: () => import('@/views/editor/jsonEditor'),
      meta: {
        title: 'jsonEditor',
      },
    },
    {
      name: 'markdownEditor',
      path: 'markdownEditor',
      component: () => import('@/views/editor/markdownEditor'),
      meta: {
        title: 'markdownEditor',
      },
    },
    {
      name: 'richTextEditor',
      path: 'richTextEditor',
      component: () => import('@/views/editor/richTextEditor'),
      meta: {
        title: 'richTextEditor',
      },
    },
  ],
};
