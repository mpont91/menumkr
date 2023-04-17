export default {
  path: '/dashboard',
  name: 'dashboard',
  component: () => import('layouts/TheDashboardLayout.vue'),
  meta: {
    requiresAuth: true,
  },
  redirect: { name: 'dashboard_home' },
  children: [
    {
      path: 'home',
      name: 'dashboard_home',
      component: () =>
        import('src/modules/dashboard/pages/DashboardHomePage.vue'),
    },
  ],
}
