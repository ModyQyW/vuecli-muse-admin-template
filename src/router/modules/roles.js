export default {
  path: '/roles',
  redirect: { name: 'user' },
  component: () => import('@/views/layout/index'),
  meta: {
    defaultOpen: true,
    icon: 'toc',
    title: 'roles',
  },
  children: [
    {
      name: 'sAdmin',
      path: 'sAdmin',
      component: () => import('@/views/roles/sAdmin'),
      meta: {
        icon: 'toc',
        title: 'sAdmin',
        role: 0,
      },
    },
    {
      name: 'admin',
      path: 'admin',
      component: () => import('@/views/roles/admin'),
      meta: {
        icon: 'toc',
        title: 'admin',
        role: 1,
      },
    },
    {
      name: 'manager',
      path: 'manager',
      component: () => import('@/views/roles/admin'),
      meta: {
        icon: 'toc',
        title: 'manager',
        role: 2,
      },
    },
    {
      name: 'developer',
      path: 'developer',
      component: () => import('@/views/roles/admin'),
      meta: {
        icon: 'toc',
        title: 'developer',
        role: 3,
      },
    },
    {
      name: 'client',
      path: 'client',
      component: () => import('@/views/roles/admin'),
      meta: {
        icon: 'toc',
        title: 'client',
        role: 4,
      },
    },
    {
      name: 'user',
      path: 'user',
      component: () => import('@/views/roles/user'),
      meta: {
        icon: 'toc',
        title: 'user',
        role: 5,
      },
    },
  ],
};
