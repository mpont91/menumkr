export default {
  path: '/',
  component: () => import('layouts/TheLandingLayout.vue'),
  children: [
    {
      path: '',
      name: 'landing',
      component: () => import('src/modules/landing/pages/LandingPage.vue'),
    },
  ],
}
