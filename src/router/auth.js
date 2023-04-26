export default {
  path: '/auth',
  name: 'auth',
  component: () => import('layouts/TheAuthLayout.vue'),
  meta: {
    requiresGuest: true,
  },
  redirect: { name: 'auth_login' },
  children: [
    {
      path: 'login',
      name: 'auth_login',
      component: () => import('src/modules/auth/pages/AuthLoginPage.vue'),
    },
    {
      path: 'forgot-password',
      name: 'auth_forgot_password',
      component: () =>
        import('src/modules/auth/pages/AuthForgotPasswordPage.vue'),
    },
    {
      path: 'reset-password',
      name: 'auth_reset_password',
      component: () =>
        import('src/modules/auth/pages/AuthResetPasswordPage.vue'),
    },
    {
      path: 'register',
      name: 'auth_register',
      component: () => import('src/modules/auth/pages/AuthRegisterPage.vue'),
    },
  ],
}
