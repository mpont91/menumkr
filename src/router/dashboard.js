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
    {
      path: 'menu/:menu',
      name: 'dashboard_menu',
      component: () =>
        import('src/modules/dashboard/pages/DashboardMenuPage.vue'),
    },
  ],
}
