export default {
  path: '/auth',
  name: 'auth',
  component: () => import('layouts/TheAuthLayout.vue'),
  redirect: { name: 'auth_login' },
  children: [
    {
      path: 'login',
      name: 'auth_login',
      component: () => import('src/modules/auth/pages/AuthLoginPage.vue'),
    },
    {
      path: 'reset-password',
      name: 'auth_reset_password',
      component: () =>
        import('src/modules/auth/pages/AuthResetPasswordPage.vue'),
    },
    {
      path: 'update-password',
      name: 'auth_update_password',
      component: () =>
        import('src/modules/auth/pages/AuthUpdatePasswordPage.vue'),
    },
  ],
}
