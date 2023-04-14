export default {
  path: '/',
  component: () => import('layouts/TheGuestLayout.vue'),
  children: [
    {
      path: '',
      component: () => import('src/modules/guest/pages/GuestLandingPage.vue'),
    },
  ],
}
