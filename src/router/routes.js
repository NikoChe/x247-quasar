
const routes = [
  {
    path: '/',
    children: [
      { name:'home', path: '', redirect:{name:'login'} },
    ]
  },
  {
    path: '/user',
    component: () => import('layouts/user.vue'),
    children: [
      { path: '/login', name: 'login', component: () => import('pages/login.vue') },
      // { path: '/sing_up', name: 'sing_up', component: () => import('pages/sing_up.vue') },
      { path: '/logout', name: 'logout', component: () => import('pages/logout.vue') },
    ]
  },

  {
    path: '/dashboard',
    component: () => import('layouts/dashboard.vue'),
    children: [
      { path: '/dashboard', name: 'dashboard', component: () => import('pages/dashboard/index.vue') },
    ]
  },
  { 
    path: '/dashboard/applications', 
    component: () => import('layouts/dashboard.vue'),
    children: [
      { path: '/dashboard/applications/home', name: 'applications_home', component: () => import('pages/dashboard/applications/home.vue') },
    ]
  },
]

// Always leave this as last one
if (process.env.MODE !== 'ssr') {
  routes.push({
    path: '*',
    component: () => import('pages/Error404.vue')
  })
}

export default routes