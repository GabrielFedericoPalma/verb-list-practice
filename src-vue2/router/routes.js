
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '/', component: () => import('src/pages/verblist.vue') },
      { path: '/practice', component: () => import('src/pages/practice.vue') },
      { path: '/exam', component: () => import('src/pages/exam.vue') },
      { path: '/results', component: () => import('src/pages/results.vue') }
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/Error404.vue')
  }
]

export default routes
