export default {
  path: '/',
  name: 'guest',
  component: () => import('layouts/TheGuestLayout.vue'),
  redirect: { name: 'guest_landing' },
  children: [
    {
      path: '',
      name: 'guest_landing',
      component: () => import('src/modules/guest/pages/GuestLandingPage.vue'),
    },
    {
      path: '/menu/:menu',
      name: 'guest_menu',
      component: () => import('src/modules/guest/pages/GuestMenuPage.vue'),
    },
  ],
}
