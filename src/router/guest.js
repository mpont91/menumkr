export default {
  path: '/',
  component: () => import('layouts/TheGuestLayout.vue'),
  redirect: { name: 'guest_landing' },
  children: [
    {
      path: '',
      name: 'guest_landing',
      component: () => import('src/modules/guest/pages/GuestLandingPage.vue'),
    },
    {
      path: '/menu',
      name: 'guest_menu',
      component: () => import('src/modules/guest/pages/GuestMenuPage.vue'),
    },
  ],
}
